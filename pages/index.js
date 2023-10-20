import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DrawerAppBar from '../components/DrawerAppBar';
import StrategiesSection from '../components/StrategiesSection';
import DonwloadsContentSection from '../components/DonwloadsContentSection';
import AboutSection from '../components/AboutSection';
import OpinionsSection from '../components/OpinionsSection';
import SpeedDial from '../components/SpeedDial';


import NewsletterSection from '../components/NewsletterSection';


export default function Home({ t }) {

  return (
    <>
      <DrawerAppBar t={t} />
      <StrategiesSection t={t} />
      <NewsletterSection t={t} />
      <DonwloadsContentSection t={t} />
      <AboutSection t={t} />
      <NewsletterSection t={t} isLinkedSection={true} />
      <OpinionsSection t={t} />
      {/* <SpeedDial /> */}
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