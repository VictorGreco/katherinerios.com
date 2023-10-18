import { appWithTranslation } from 'next-i18next';

import { useTranslation } from 'next-i18next';
import Footer from '../components/Footer';

import styles from '../styles/globals.css';

const App = ({ Component, pageProps }) => {

  const { t } = useTranslation();

  return (
    <>
      <Component {...pageProps} t={t} />
      <Footer t={t} />
    </>
  )
}

export default appWithTranslation(App)