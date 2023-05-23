import classes from './index.module.css';
import { Container } from "@/components/ui/container";
import { WrapperForm } from "@/components/wrapperForm";
import { useScrollPositionWindow } from "@/hooks/useScrollPositionWindow";
import useWindowSize from '@/hooks/useWindowSize';
import classNames from "classnames";
import Image from 'next/image';
import Link from 'next/link';

const Banner: React.FC = () => {
    const scrollPosition = useScrollPositionWindow();
    const { width } = useWindowSize();

    const isMobile = Number(width) <= 768;

    return (
        <section className={classes.bannerSection}>
            <div className={classNames(classes.bannerContent, {
                [classes.informationPanelFixed]: scrollPosition >= 50
            })}>
                <Container>
                    <WrapperForm>
                        <div className={classes.rightContent}>
                            <p>
                                <Link href='/'>Home {'>>'}</Link>
                                <span>Contact Us</span>
                            </p>
                            {!isMobile && <Image
                                alt="home page background image"
                                src={'/assets/images/contactUsBannerImage.png'}
                                width={3840}
                                height={999}
                                className={classes.bannerImage}
                                priority
                            />}
                        </div>
                    </WrapperForm>
                </Container>
            </div>
        </section>
    );
};

export { Banner };