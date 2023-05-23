import { Container } from '@/components/ui/container';
import { Fragment, useContext, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { OpenFormQuote } from '@/public/assets/svges/OpenFormQuote';
import { OperatorIcon } from '@/public/assets/svges/OperatorIcon';
import { BurgerIcon } from '@/public/assets/svges/BurgerIcon';
import { CloseMenuIcon } from '@/public/assets/svges/CloseMenuIcon';
import { GlobalDatasContext } from '@/context/globalDatas';
import { useQuery } from 'react-query';
import { getMenus } from '@/constants/service';
import { setMenuDataAction, setMenuErrorAction } from '@/context/globalDatas/reducer/actions/menu';
import { LoadingUI } from '@/components/ui/LoadingUI';
import { Redirect } from '@/components/Redirect';
import { EmailIcon } from '@/public/assets/svges/EmailIcon';
import { CertificateIcon } from '@/public/assets/svges/CertificateIcon';
import { useScrollPositionWindow } from '@/hooks/useScrollPositionWindow';
import { Form } from '@/components/wrapperForm/form';
import { MobileMenu } from '../MobileMenu';
import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import classes from './index.module.css';
import classNames from 'classnames';
import Link from 'next/link';

const TopPart: React.FC = () => {
    const { width } = useWindowSize();
    const { pathname } = useRouter()

    const {
        menuBar: { isOpen: isOpenMenuBar, toogleIsOpen: toogleIsOpenMenuBar },
        formPopUp: { isOpen: isOpenFormPopUp, toogleIsOpen: toogleIsOpenFormPopUp },
        menus: { data: menuData }
    } = useContext(GlobalDatasContext);
    
    useEffect(() => {
        if(Number(width) > 768) {
            isOpenFormPopUp && toogleIsOpenFormPopUp();
            isOpenMenuBar && toogleIsOpenMenuBar();
        };
    }, [width]);

    const isMobile = useMemo(() => Number(width) <= 768, [width]);
    const isInHome = useMemo(() => pathname === '/', [pathname]);

    return (
        <div className={classNames(classes.topPart, {
            [classes.openFormQuotetopPart]: isOpenFormPopUp,
            [classes.quotetopPartIsInHome]: isInHome
        })}>
            {isMobile && (
                <div className={classes.topPartQoute}>
                    <div className={classes.partQouteBlock} onClick={toogleIsOpenFormPopUp}>
                        <p>Get A Quote </p>
                        <OpenFormQuote rotate={isOpenFormPopUp ? 180 : 0}/>
                    </div>
                    { isOpenFormPopUp && (
                        <div className={classes.layoutForm}>
                            <Form fromLayout={true}/>
                        </div>
                    )}
                </div>
            )}
            { !isMobile && (
                <Container>
                    <div className={classes.topPartContent}>
                        { menuData?.contactInfo?.phone?.url && (
                            <p>
                                <a>
                                    <OperatorIcon />
                                    {menuData?.contactInfo?.phone?.url}
                                </a>
                            </p>
                        )}
                        { menuData?.contactInfo?.Mail?.url && (
                            <p>
                                <a>
                                    <EmailIcon />
                                    {menuData?.contactInfo?.Mail?.url}
                                </a>
                            </p>
                        )}
                        <p>
                            <CertificateIcon />
                            <a>Certificate Request</a>
                        </p>
                    </div>
                </Container>
            )}
        </div>
    )
};

const Header: React.FC = () => {
    const { pathname } = useRouter()
    const { width } = useWindowSize();
    const scrollPosition = useScrollPositionWindow();
    const {
        menuBar: { isOpen, toogleIsOpen },
        menus: { data: menuData, error: menuError },
        dispatch
    } = useContext(GlobalDatasContext);

    const { isLoading: isLoadingMenu, data } = useQuery('menus', getMenus(), {
        onSuccess: data => dispatch(setMenuDataAction(data)),
        onError: (error: any) => dispatch(setMenuErrorAction(error)),
        enabled: menuData === null && !menuError
    });

    const isInHome = useMemo(() => pathname === '/', [pathname]);
    const isMobile = useMemo(() => Number(width) <= 768, [width]);

    const navBarLinks: Array<{
        title: string;
        link: string;
        isActive: boolean;
        id: number;
    }> = useMemo(() => {
        if(menuData?.topHeaderItems?.length){
            const centerItems = menuData.topHeaderItems.find(item => item?.title === 'Center');
            if(centerItems && centerItems.children && centerItems.children.length) {
                console.log('pathname --> ', pathname);
                console.log('children --> ',  centerItems.children);
                return centerItems.children.map(item => ({
                    id: item.id,
                    title: item.title,
                    link: item.url,
                    isActive: pathname.replace('/', '') === item.url.replace('/', '')
                }))
            };
        };
        return [];
    }, [menuData, pathname]);

    if(menuError !== null) return <Redirect to='404' />;

    if(isLoadingMenu) return <LoadingUI type='fullPage' />;

    return (
        <header className={classNames(classes.header, {
            [classes.homeHeaderDesktop]: isInHome && !isMobile
        })}>
            <TopPart />
            <div className={classNames(classes.informationPanel, {
                [classes.informationPanelFixed]: scrollPosition >= 50
            })}>
                <Container>
                    <div className={classes.informationPanelContent}>
                        <Link href='/' className={classes.informationPanelLogoWrapper}>
                            <Image
                                src={'/assets/images/logo.png'}
                                alt="logo"
                                className={classes.informationPanelLogo}
                                width={isMobile ? 50 : 105}
                                height={isMobile ? 50 : 105}
                                style={{ aspectRatio: isMobile ? '50/50' : '105/105' }}
                            />
                            <div className={classes.informationPanelTitleWrapper}>
                                <h1 className={classes.informationPanelTitle}>
                                    FONTANA
                                </h1>
                                <p className={classes.informationPaneldescription}>
                                    Truck Insurance
                                </p>
                            </div>
                        </Link>
                        { isMobile ? (
                            <div className={classes.burgerWrapper}>
                                <div className={classes.group}>
                                    <OperatorIcon />
                                    <p>Call Now</p>
                                </div>
                                <div className={classes.group} onClick={() => {
                                    !isOpen && window.scroll({ top: 0 });
                                    toogleIsOpen();
                                }}>
                                    { isOpen ? (
                                        <Fragment>
                                            <CloseMenuIcon />
                                            <p>Close</p>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <BurgerIcon />
                                            <p>Menu</p>
                                        </Fragment>
                                    ) }
                                </div>
                            </div>
                        ) : (
                            <nav className={classes.navBar}>
                                <ul className={classes.ul}>
                                    { navBarLinks.map(({ id, link, title, isActive }) => (
                                        <li key={id} className={classNames({
                                            [classes.activeLink]: isActive
                                        })}>
                                            <Link href={link}>{title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        )}
                    </div>
                </Container>
            </div>
            { isOpen && <MobileMenu /> }
        </header>
    );
};

export { Header };