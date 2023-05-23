import { ArrowToRightBlue } from '@/public/assets/svges/ArrowToRightBlue';
import Image from 'next/image';
import Link from 'next/link';
import classes from './index.module.css';
import classNames from 'classnames';
import { Fragment } from 'react';

interface IProps {
    image?: string;
    title?: string;
    description?: string;
    link?: string;
    carOut?: boolean;
    bigImage?: string;
}

const ServiceCard: React.FC<IProps> = ({
    description,
    image,
    link,
    title,
    carOut,
    bigImage
}) => {
    return (
        <div className={classNames(classes.service, {
            [classes.carOut]: carOut,
            [classes.bigImage]: bigImage
        })}>
            { bigImage ? (
                <Image
                    alt="service image"
                    src={bigImage || ''}
                    width={80}
                    height={40}
                    className={classes.serviceBigImage}
                />   
            ) : (
                <Fragment>
                    <p className={classes.wrapperImage}>
                        <Image
                            alt="service image"
                            src={image || ''}
                            width={80}
                            height={40}
                            className={classes.serviceImage}
                        />
                    </p>
                    <h3 className={classes.serviceTitle}>{title}</h3>
                    <p className={classes.serviceDescription}>
                        {description }
                    </p>
                    <Link href={link || ''} className={classes.serviceLink}>
                        <ArrowToRightBlue />
                        <span>
                            Read More
                        </span>
                    </Link>
                </Fragment>
            )}
        </div>
    );
};

export { ServiceCard }