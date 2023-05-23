import useWindowSize from '@/hooks/useWindowSize';
import classes from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FbSmallGreenIcon } from '@/public/assets/svges/FbSmallGreenIcon';
import { TwitterSmallGreenIcon } from '@/public/assets/svges/TwitterSmallGreenIcon';
import { PinterestSmallGreenIcon } from '@/public/assets/svges/PinterestSmallGreenIcon';
import { Container } from '@/components/ui/container';

const FooterMobile: React.FC = () => {

    return (
        <footer className={classes.mobileFooter}>
            <div className={classes.mobileFooterTopSlice}>
                <Link href='/' className={classes.mobileFooterLogoWrapper}>
                    <Image
                        src={'/assets/images/logo.png'}
                        alt="logo"
                        width={50}
                        height={50}
                        style={{ aspectRatio: '50/50' }}
                    />
                    <div className={classes.mobileFooterTitleWrapper}>
                        <h1 className={classes.mobileFooterTitle}>
                            FONTANA
                        </h1>
                        <p className={classes.mobileFooterdescription}>
                            Truck Insurance
                        </p>
                    </div>
                </Link>
                <div className={classes.mobileFooterSocialLinksWrapper}>
                    <p className={classes.mobileFooterFollowText}>Follow Us</p>
                    <div className={classes.mobileFooterSocialGroup}>
                        <Link href={'fb'}><FbSmallGreenIcon /></Link>
                        <Link href={'tw'}><TwitterSmallGreenIcon /></Link>
                        <Link href={'yesim'}><PinterestSmallGreenIcon /></Link>
                    </div>
                </div>
            </div>
            <div className={classes.mobileFooterContactLinks}>
                <Link href={'tel:( 909 ) 347 - 5835'}> Phone: ( 909 ) 347 - 5835 </Link>
                <p> Email: info@fontanatruckinsurance.com </p>
                <p> Address: 2009 BURBANK Blvd. Burbank, CA 91506 </p>
            </div>
            <p className={classes.mobileFooterCopyrightText}>Copyright © Fontana Truck Insurance. All rights reserved 2023.</p>
            <div className={classes.mobileFooterUnderLinks}>
                <Link href={'Terms And Conditions'}>Terms And Conditions</Link>
                <Link href={'Privacy Policy'}>Privacy Policy</Link>
            </div>
        </footer>
    );
};

const Footer: React.FC = () => {
    const { width } = useWindowSize();

    const isMobile = Number(width) <= 768;

    if(isMobile) return <FooterMobile />;

    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.footerContent}>
                    <ul className={classes.footerGeneralLinks}>
                        <p>Commercial Truck Insurance</p>
                        <li><Link href='/'>Agricultural Equipment Insurance</Link></li>
                        <li><Link href='/'>Owner-Operator Truck Insurance</Link></li>
                        <li><Link href='/'>Sand and Gravel Truck Insurance</Link></li>
                        <li><Link href='/'>Commercial Truck Insurance</Link></li>
                        <li><Link href='/'>Package Delivery Insurance</Link></li>
                        <li><Link href='/'>Commercial Auto Insurance</Link></li>
                        <li><Link href='/'>Truck Insurance Coverage</Link></li>
                        <li><Link href='/'>Box Truck Insurance</Link></li>
                        <li><Link href='/'>Big Rig Insurance</Link></li>
                    </ul>
                    <ul className={classes.footerGeneralLinks}>
                        <p>Truck Insurance Rates</p>
                        <li><Link href='/'>Semi Truck Insurance Quote</Link></li>
                        <li><Link href='/'>Semi Truck Insurance Rates</Link></li>
                        <li><Link href='/'>Liability Insurance Quotes</Link></li>
                        <li><Link href='/'>Big Rig Insurance Quotes</Link></li>
                        <li><Link href='/'>Truck Insurance Agency</Link></li>
                        <li><Link href='/'>Truck Insurance Company</Link></li>
                        <li><Link href='/'>Truck Insurance Quote</Link></li>
                        <li><Link href='/'>Cargo Insurance Rates</Link></li>
                        <li><Link href='/'>Truck Insurance Rates</Link></li>
                    </ul>
                    <div className={classes.footerContactWrapper}>
                        <Link href='/' className={classes.mobileFooterLogoWrapper}>
                            <Image
                                src={'/assets/images/logo.png'}
                                alt="logo"
                                width={105}
                                height={105}
                                style={{ aspectRatio: '105/105' }}
                            />
                            <div className={classes.footerTitleWrapper}>
                                <h1 className={classes.footerTitle}>
                                    FONTANA
                                </h1>
                                <p className={classes.footerdescription}>
                                    Truck Insurance
                                </p>
                            </div>
                        </Link>
                        <div className={classes.footerContactLink}>
                            <p>mailto:info@fontanatruckinsurance.com</p>
                            <p>(909) 347 5835</p>
                        </div>
                        <div className={classes.footerQuickLinks}>
                            <p>Quick Links</p>
                            <Link href={'/'}>Customer Reviews</Link>
                            <Link href={'/'}>Our Company</Link>
                            <Link href={'/'}>Jobs</Link>
                            <Link href={'/'}>GET A QUOTE</Link>
                            <Link href={'/'}>Follow Us</Link>
                        </div>
                        <div className={classes.footerSocialGroup}>
                            <Link href={'fb'}><FbSmallGreenIcon /></Link>
                            <Link href={'tw'}><TwitterSmallGreenIcon /></Link>
                            <Link href={'yesim'}><PinterestSmallGreenIcon /></Link>
                        </div>
                    </div>
                </div>
                <div className={classes.footarUnderPart}>
                    <div className={classes.footarUnderPartLinks}>
                        <Link href={'Terms And Conditions'}>Terms And Conditions</Link>
                        <Link href={'Privacy Policy'}>Privacy Policy</Link>
                    </div>
                    <p className={classes.footerCopyrightText}>Copyright © Fontana Truck Insurance. All rights reserved 2023.</p>
                </div>
            </Container>
        </footer>
    );
};

export { Footer };