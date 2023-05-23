import Image from "next/image";
import classes from './index.module.css';
import useWindowSize from "@/hooks/useWindowSize";
import { useMemo } from "react";
import { Container } from "@/components/ui/container";
import { WrapperForm } from "@/components/wrapperForm";
import { useScrollPositionWindow } from "@/hooks/useScrollPositionWindow";
import classNames from "classnames";

const Banner: React.FC = () => {
    const { width } = useWindowSize();
    const scrollPosition = useScrollPositionWindow();
    
    const isMobile = useMemo(() => Number(width) <= 768, [width]);

    return (
        <section className={classes.bannerSection}>
            { !isMobile &&
                <Image
                    alt="home page background image"
                    src={'/assets/images/homeBanner.png'}
                    width={3840}
                    height={999}
                    className={classes.bannerImage}
                    priority
                />
            }
            <div className={classNames(classes.bannerContent, {
                [classes.informationPanelFixed]: scrollPosition >= 50
            })}>
                <Container>
                    <WrapperForm />
                </Container>
            </div>
        </section>
    );
};

export { Banner };