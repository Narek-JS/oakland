import React, { Fragment } from 'react';
import Head from 'next/head';
import { Footer } from './Footer';
import { ScrollTopIcon } from './ScrollTopIcon';
import { Header } from './Header';
import { SocialLinks } from './SocialLinks';
import { QueryClientProvider, QueryClient } from 'react-query';
import { GlobalDatasProvider } from '@/context/globalDatas';
import classes from './index.module.css';

const queryClient = new QueryClient();

interface IProps {
  pageTitle?: string;
  children: React.ReactNode;
}

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <GlobalDatasProvider>
      {children}
    </GlobalDatasProvider>
  </QueryClientProvider>
);

const Layout: React.FC<IProps> = ({ children, pageTitle = 'Fortana App' }) => {

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <ContextProvider>
        <Header />
        <SocialLinks />
        <main className={classes.main}>
          {children}
        </main>
        <Footer />
      </ContextProvider>
      <ScrollTopIcon />
    </Fragment>
)};

export default Layout;