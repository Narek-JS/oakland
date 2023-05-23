import { metaTags } from '@/constants/metaTags';
import { Fragment } from 'react';
import Head from 'next/head';
import classes from './index.module.css';
import { Container } from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';

export default function ThankYou() {
    const { width } = useWindowSize();


    const isMobile = Number(width) <= 768;

    return (
        <Fragment>
            <Head>{metaTags.faqs}</Head>
            <section className={classes.section}>
                <Container>
                    <h1 className={classes.title}>
                        Thank You!
                    </h1>
                    <p className={classes.description}>
                        Thank you for your request! We will get back to you shortly with the quote and truck availability information. Meanwhile, feel free to contact us directly at <a>(909) 347-5835</a> to speak to a live agent!
                    </p>
                    <div className={classes.wrapperVideo}>
                        <div
                            className={classes.video}
                            style={isMobile ? {height: `${(Number(width) - 388) < 240 ? 240 : Number(width) - 388 }px`} : {}}
                        >
                            <Image
                                src={'/assets/images/thankYouVideoImage.png'}
                                alt="play"
                                className={classes.videoImage}
                                width={720}
                                height={380}
                                priority
                            />
                            <Link
                                target='_blank'
                                href={'url'}
                            >
                                <Image
                                    src={'/assets/images/playIconBlack.png'}
                                    alt="play"
                                    className={classes.playIcon}
                                    width={isMobile ? 73 : 91}
                                    height={isMobile ? 51 : 64}
                                    style={{ aspectRatio: '73/51' }}
                                />
                            </Link>
                        </div>
                        <div className={classes.image}>
                            <Image
                                src={'/assets/images/thankYouImage.png'}
                                alt="play"
                                width={600}
                                height={599}
                                priority
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </Fragment>
    );
};