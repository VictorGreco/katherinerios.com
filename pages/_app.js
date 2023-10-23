import { appWithTranslation } from 'next-i18next';
import Head from 'next/head'


import { useTranslation } from 'next-i18next';
import DrawerAppBar from '../components/DrawerAppBar';
import Footer from '../components/Footer';

import styles from '../styles/globals.css';

const App = ({ Component, pageProps }) => {

  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Katherinrios | Real estate</title>
      </Head>
      <DrawerAppBar t={t} />
      <Component {...pageProps} t={t} />
      <Footer t={t} />
    </>
  )
}

export default appWithTranslation(App)