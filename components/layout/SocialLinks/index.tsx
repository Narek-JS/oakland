
import { Fragment } from 'react';
import Image from 'next/image';
import classes from './index.module.css';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';

const socialIcons = [
    {
        image: '/assets/images/FbRightSocialIcon.png',
        url: '/'
    },
    {
        image: '/assets/images/TwitterRightSocialIcon.png',
        url: '/'
    },
    {
        image: '/assets/images/PinterestRightSocialIcon.png',
        url: '/'
    },
    {
        image: '/assets/images/GoogleRightSocialIcon.png',
        url: '/'
    },
];

const SocialLinks = () => {
    const { width } = useWindowSize();

    const isMobile = Number(width) <= 768;
    
    return isMobile ? null : (
        <Fragment>
            <div className={classes.socialLinks}>
                { socialIcons.map(({ image, url }, index) => (
                    <Link key={index} href={url}>
                        <Image
                            alt="social Icon"
                            src={image}
                            width={40}
                            height={40}
                            className={classes.bannerImage}
                            priority
                        />
                    </Link>
                ))}
            </div>
        </Fragment>
    );
};

export { SocialLinks };