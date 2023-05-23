import { ChooseUsSubtitleIcon } from '@/public/assets/svges/ChooseUsSubtitleIcon';
import classes from './index.module.css';
import useWindowSize from '@/hooks/useWindowSize';

const BlockUnderChooseUs:React.FC = () => {
    const { width } = useWindowSize();

    const dataContent = [
        {
            title: 'WE ARE A FULL TRUCK INSURANCE PROVIDER',
            description: 'We provide coverage for all forms of trucking. From Semi- Trucks, Tow Trucks and Cement Trucks, to any type of trailer or passenger vehicle, your company will find the best truck insurance for the best price. At Fontana Truck Insurance, you will find the best possible plans to fit the necessary requirements for your trucking business.'
        },
        {
            title: "OBTAINING AUTHORITIES",
            description: "Do you need help getting your DOT number? We have everything you need. Not only can we help you get your DOT number, we can help you obtain your MC number, IFTA Filings, Biennial Updates, and anything else in order to get your business moving forward."
        },
        {
            title: "WE HAVE YOU COVERED",
            description: "From the smallest shipping trucks to the largest trucking fleet, we proudly serve California businesses with premier trucking insurance, trucking information, and trucking registrations. Safety is key when running a trucking business and by registering with Fontana Truck Insurance, your trucking business will have the best protection available. Countless owner operators and trucking fleets trust us with their protection and you can count on us to do the same for you."
        }
    ]
    const isMobile = Number(width) <= 768;

    return (
        <div className={classes.wrapperContetn}>
            <div className={classes.wrapperDescription}>
                { dataContent.map((article, index) => (
                    <div className={classes.descriptionArticle} key={index}>
                        <div className={classes.wrapperSubTitle}>
                            <ChooseUsSubtitleIcon {...(isMobile && { color: '#16426C' })}/>
                            <h3 className={classes.subTitle}>{article.title}</h3>
                        </div>
                        <p className={classes.description}>
                            { article.description }
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { BlockUnderChooseUs };