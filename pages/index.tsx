import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { Container } from '@/components/ui/container';
import {
  Banner,
  BlockUnderChooseUs,
  ChoosUs,
  ContactInfo,
  InsuranceServices,
  Services
} from '@/components/home';
import Head from 'next/head';
import Image from 'next/image';
import classes from './index.module.css';

export default function Home() {

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
  ];

  const seccondServicesData = [
    {
      image: '/assets/images/firstServiceImage.png',
      title: 'LIABILITY INSURANCE',
      description: 'We offer premier insurance to everyone from owner operators and fleet managers to passenger vehicles and trailers.',
      link: '/'
    },
    { bigImage: '/assets/images/bigImage1Service.png' },
    {
      image: '/assets/images/theredServiceImaeg.png',
      title: 'PHYSICAL DAMAGE',
      description: 'Protect yourself and your vehicle from any potential damage! We will cover the cost of any damage!',
      link: '/'
    },
    { bigImage: '/assets/images/bigImage2Service.png' },
  ]

  return (
    <Fragment>
      <Head>{metaTags.home}</Head>
      <Banner />
      <section className={classes.section}>
        <Container>
          <div className={classes.meddleSectionContent}>
              <Image
                alt="home page background image"
                src={'/assets/images/InsuranceServicesBgImage.png'}
                width={3840}
                height={9999}
                className={classes.bgImage}
              />
              <Services servicesData={serviesData}/>
              <ChoosUs />
              <BlockUnderChooseUs />
              <Services servicesData={seccondServicesData}/>
          </div>
        </Container>
      </section>
      <InsuranceServices />
      <ContactInfo />
    </Fragment>
  );
};
