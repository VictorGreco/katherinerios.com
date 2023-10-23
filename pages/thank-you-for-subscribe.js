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
              <h1>{t('landing_page.thankyou-subscribe.message')}</h1>
          </Grid>
          <Grid item sx={12} className={`${styles.itemGrid} ${styles.Subtitle}`}>
              <h2>{t('landing_page.thankyou-subscribe.redirect')}</h2>
          </Grid>
      </Grid>
    </section>
  )
}

export const getStaticProps = async ({ locale }) => {
  const translationsProps = await serverSideTranslations(locale ?? 'es', [
    'default',
  ])

  return {
    props: {
      ...translationsProps,
    },
  }
}