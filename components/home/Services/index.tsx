import { ServiceCard } from '../ServiceCard';
import classes from './index.module.css';

const Services: React.FC<{
    servicesData:Array<{
        image?: string;
        title?: string;
        description?: string;
        link?: string;
        bigImage?: string;
    }>
}> = ({ servicesData }) => {

    return (
        <div className={classes.section}>
            <div className={classes.services}>
                { servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        {...service}
                        carOut={true}
                    />
                ))}
            </div>
        </div>
    );
};

export { Services };