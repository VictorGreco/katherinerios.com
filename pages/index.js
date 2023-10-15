import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import IntrocutionSection from '../components/IntroductionSection';

import NewsletterSection from '../components/NewsletterSection';


export default function Home() {
  const { t } = useTranslation()

  return (
    <main>
      <IntrocutionSection t={t} />
      <NewsletterSection t={t} />
    </main>

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