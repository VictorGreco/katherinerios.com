import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Grid } from '@mui/material';

import styles from '../styles/ThankYouPage.module.css';
import { useEffect } from 'react';


export default function Home({ t }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.location.href = '/';
      }, 5000);
    }
  }, [])

  return (
    <section id='thank-you'>
      <Grid container className={styles.containerGrid}>
          <Grid item sx={12} className={`${styles.itemGrid} ${styles.MainTitleWrapper}`}>
              <h2>{t('landing_page.thankyou-download.message')}</h2>
          </Grid>
          <Grid item sx={12} className={`${styles.itemGrid} ${styles.Subtitle}`}>
              <h3>{t('landing_page.thankyou-download.redirect')}</h3>
          </Grid>
      </Grid>
    </section>
  )
}

export const getStaticProps = async ({ locale }) => {
  const translationsProps = await serverSideTranslations(locale ?? 'es', [
    // `i18next` namespace, matches translations file names
    // & `defaultNS` in `next-i18next.config.js`
    'default',
  ])

  return {
    props: {
      // These props are used by `appWithTranslation` in `_app.tsx`
      // to set up a React context which holds translations
      ...translationsProps,
    },
  }
}