import { Container } from '@/components/ui/container';
import { ServiceCard } from '../ServiceCard';
import Image from 'next/image';
import classes from './index.module.css';
import useWindowSize from '@/hooks/useWindowSize';

const InsuranceServices = () => {
    const { width } = useWindowSize();

    const serviesData = [
        {
            image: '/assets/images/firstServiceImage.png',
            title: 'LIABILITY INSURANCE',
            description: 'We offer premier insurance to everyone from owner operators and fleet managers to passenger vehicles and trailers.',
            link: '/'
        },
        {
            image: '/assets/images/seccondServiceImage.png',
            title: 'CARGO INSURANCE',
            description: 'Looking to fully protect your cargo? We provide the best cargo insurance for the best possible price!',
            link: '/'
        },
        {
            image: '/assets/images/theredServiceImaeg.png',
            title: 'PHYSICAL DAMAGE',
            description: 'Protect yourself and your vehicle from any potential damage! We will cover the cost of any damage!',
            link: '/'
        },
        {
            image: '/assets/images/fourthServiceImage.png',
            title: 'ON-HOOK INSURANCE',
            description: 'To protect yourself in case of an accident, you should have On-Hook Towing Insurance in your policy along with other coverages.',
            link: '/'
        },
        {
            image: '/assets/images/firstServiceImage.png',
            title: 'LIABILITY INSURANCE',
            description: 'We offer premier insurance to everyone from owner operators and fleet managers to passenger vehicles and trailers.',
            link: '/'
        },
        {
            image: '/assets/images/seccondServiceImage.png',
            title: 'CARGO INSURANCE',
            description: 'Looking to fully protect your cargo? We provide the best cargo insurance for the best possible price!',
            link: '/'
        },
        {
            image: '/assets/images/theredServiceImaeg.png',
            title: 'PHYSICAL DAMAGE',
            description: 'Protect yourself and your vehicle from any potential damage! We will cover the cost of any damage!',
            link: '/'
        },
        {
            image: '/assets/images/fourthServiceImage.png',
            title: 'ON-HOOK INSURANCE',
            description: 'To protect yourself in case of an accident, you should have On-Hook Towing Insurance in your policy along with other coverages.',
            link: '/'
        },
        {
            image: '/assets/images/firstServiceImage.png',
            title: 'LIABILITY INSURANCE',
            description: 'We offer premier insurance to everyone from owner operators and fleet managers to passenger vehicles and trailers.',
            link: '/'
        },
        {
            image: '/assets/images/seccondServiceImage.png',
            title: 'CARGO INSURANCE',
            description: 'Looking to fully protect your cargo? We provide the best cargo insurance for the best possible price!',
            link: '/'
        },
        {
            image: '/assets/images/theredServiceImaeg.png',
            title: 'PHYSICAL DAMAGE',
            description: 'Protect yourself and your vehicle from any potential damage! We will cover the cost of any damage!',
            link: '/'
        },
        {
            image: '/assets/images/fourthServiceImage.png',
            title: 'ON-HOOK INSURANCE',
            description: 'To protect yourself in case of an accident, you should have On-Hook Towing Insurance in your policy along with other coverages.',
            link: '/'
        },
    ];

    const isMobile = Number(width) <= 768;

    return (
        <section className={classes.section}>
            <Container>
                <h2 className={classes.title}>
                    Our Truck Insurance Services
                </h2>
                <p className={classes.description}>
                    For any type of truck you drive, we have the perfect policy to cover it. Check out a few below:
                </p>
                <div className={classes.content}>
                    { !isMobile &&
                        <Image
                            alt="home page background image"
                            src={'/assets/images/InsuranceServicesBgImage.png'}
                            width={3840}
                            height={999}
                            className={classes.bgImage}
                        />
                    }
                    <div className={classes.services}>
                        { serviesData.map((service, index) => (
                            <ServiceCard {...service} key={index}/>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { InsuranceServices };