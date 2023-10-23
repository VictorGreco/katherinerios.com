import { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import StrategiesSection from '../components/StrategiesSection';
import DonwloadsContentSection from '../components/DonwloadsContentSection';
import AboutSection from '../components/AboutSection';
import OpinionsSection from '../components/OpinionsSection';

import NewsletterSection from '../components/NewsletterSection';


export default function Home({ t }) {
  const [isMobile, setIsMobile] = useState('_mobile');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent) ? '_mobile' : '');
    }
  }, [])
  
  return (
    <>
      <StrategiesSection t={t} isMobile={isMobile} />
      <DonwloadsContentSection t={t} />
      <AboutSection t={t} />
      <NewsletterSection t={t} isLinkedSection={true} />
      <OpinionsSection t={t} isMobile={isMobile} />
    </>
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