import { useContext, useMemo } from 'react';
import { GlobalDatasContext } from '@/context/globalDatas';
import { OperatorIcon } from '@/public/assets/svges/OperatorIcon';
import { CertificateIcon } from '@/public/assets/svges/CertificateIcon';
import { EmailIcon } from '@/public/assets/svges/EmailIcon';
import Link from 'next/link';
import classes from './index.module.css';
import { useScrollPositionWindow } from '@/hooks/useScrollPositionWindow';
import classNames from 'classnames';

const MobileMenu: React.FC = () => {
    const {
        menus: { data: menuData },
        menuBar: { toogleIsOpen },        
    } = useContext(GlobalDatasContext);

    const scrollPosition = useScrollPositionWindow()

    const links: Array<{
        title: string;
        link: string;
        id: number;
    }> = useMemo(() => {
        if(menuData?.topHeaderItems?.length){
            const centerItems = menuData.topHeaderItems.find(item => item?.title === 'Center');
            if(centerItems && centerItems.children && centerItems.children.length) {
                return centerItems.children.map(item => ({
                    id: item.id,
                    title: item.title,
                    link: item.url
                }))
            };
        };
        return [];
    }, [menuData]);

    return (
        <div className={classNames(classes.mobileMenu, {
            [classes.t]: scrollPosition >= 50
        })}>
                <ul className={classes.links}>
                    { links.map(({ id, link, title }) => (
                        <li key={id} className={classes.link}>
                            <Link href={link} onClick={toogleIsOpen}>{title}</Link>
                        </li>
                    ))}
                </ul>
                <div className={classes.contactsInfo}>
                    { menuData?.contactInfo?.phone?.url && (
                        <a>
                            <OperatorIcon />
                            <span>
                                {menuData?.contactInfo?.phone?.url}
                            </span>
                        </a>
                    )}
                    { menuData?.contactInfo?.Mail?.url && (
                        <a>
                            <EmailIcon />
                            <span>
                                {menuData?.contactInfo?.Mail?.url}
                            </span>
                        </a>
                    )}
                    <a>
                        <CertificateIcon />
                        <span>
                            Certificate Request
                        </span>
                    </a>
                </div>
        </div>
    );
};

export { MobileMenu };