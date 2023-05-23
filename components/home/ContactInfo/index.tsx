import { Container } from '@/components/ui/container';
import classes from './index.module.css';
import { ContactForm } from '@/components/contactForm';

const ContactInfo: React.FC = () => {



    return (
        <section className={classes.section}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.information}>
                        <h2 className={classes.title}>Contact Info</h2>
                        <p className={classes.description}>Do you have questions about insuring your truck? Our agents will be happy to assist you! Contact us today and we will be happy to guide you through the insurance process.</p>
                        <div className={classes.typeGroupWrapper}>
                            <div className={classes.groupLine}>
                                <h3 className={classes.typeTitle}>Address!</h3>
                                <p className={classes.typeDescription}>13876 Jurupa Ave, Fontana, CA 92337</p>
                            </div>
                            <div className={classes.groupLine}>
                                <h3 className={classes.typeTitle}>Phone!</h3>
                                <p className={classes.typeDescription}>(909) 347-5835</p>
                            </div>
                            <div className={classes.groupLine}>
                                <h3 className={classes.typeTitle}>Email!!</h3>
                                <p className={classes.typeDescription}>info@fontanatruckinsurance.com</p>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </Container>
        </section>
    );
};

export { ContactInfo };