import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { Container } from '@/components/ui/container';
import { CommentForm } from '@/components/commentForm';
import { Banner, Questions } from '@/components/faq';
import Head from 'next/head';

export default function Faq() {

  return (
    <Fragment>
      <Head>{metaTags.faqs}</Head>
      <Banner />
      <Questions />
      <section style={{ background: '#001D4A' }}>
        <Container>
          <CommentForm />
        </Container>
      </section>
    </Fragment>
  );
};
