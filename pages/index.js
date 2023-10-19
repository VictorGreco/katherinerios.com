import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Grid from '@mui/material/Grid';

import IntrocutionSection from '../components/IntroductionSection';
import DrawerAppBar from '../components/DrawerAppBar';
import StrategiesSection from '../components/StrategiesSection';
import DonwloadsContentSection from '../components/DonwloadsContentSection';
import AboutSection from '../components/AboutSection';
import OpinionsSection from '../components/OpinionsSection';

import NewsletterSection from '../components/NewsletterSection';


export default function Home({ t }) {

  return (
    <>
      {/* <IntrocutionSection t={t} /> */}
      <DrawerAppBar t={t} />
      <StrategiesSection t={t} />
      <NewsletterSection t={t} />
      <DonwloadsContentSection t={t} />
      <AboutSection t={t} />
      <NewsletterSection t={t} />
      <OpinionsSection t={t} />
    </>
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