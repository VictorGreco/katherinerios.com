import { appWithTranslation } from 'next-i18next';
import Head from 'next/head'

import { Analytics } from '@vercel/analytics/react';


import { useTranslation } from 'next-i18next';
import DrawerAppBar from '../components/DrawerAppBar';
import Footer from '../components/Footer';

import styles from '../styles/globals.css'; // DO NOT REMOVE

const App = ({ Component, pageProps }) => {

  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Katherinrios | Real estate</title>
      </Head>
      <DrawerAppBar t={t} />
      <Component {...pageProps} t={t} />
      <Analytics />
      <Footer t={t} />
    </>
  )
}

export default appWithTranslation(App)