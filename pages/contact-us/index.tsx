import { metaTags } from '@/constants/metaTags';
import { Fragment } from 'react';
import { Container } from '@/components/ui/container';
import { CommentForm } from '@/components/commentForm';
import { Banner, ContactInfo, PostComments } from '@/components/contactUs';
import Head from 'next/head';

export default function Contact() {

  return (
    <Fragment>
      <Head>{metaTags.contact}</Head>
      <Banner />
      <ContactInfo />
      <PostComments />
      <section style={{ background: '#001D4A' }}>
        <Container>
          <CommentForm />
        </Container>
      </section>
    </Fragment>
  );
};
