
import Image from 'next/image';

import Grid from '@mui/material/Grid';

import CtaButton from '../components/CtaButton';


import styles from '../styles/DownloadsContentSection.module.css';

const contents = [
    {
        "title": "landing_page.downloads.contents.content1.title",
        "subtitle": "landing_page.downloads.contents.content1.subtitle",
        "ctaButtonText": "landing_page.downloads.contents.content1.ctaButtonText",
        "ctaButtonAction": () => {},
        "sideImage": "/statics/downloadsContentSectionSideImage1.png",
        "mainImage": "/statics/downloadsContentSectionPlaceHolders.png",
        "mainBoxStyles": styles.MainContentWrapperPink
    },
    {
        "title": "landing_page.downloads.contents.content2.title",
        "subtitle": "landing_page.downloads.contents.content2.subtitle",
        "ctaButtonText": "landing_page.downloads.contents.content2.ctaButtonText",
        "ctaButtonAction": () => {},
        "sideImage": "/statics/downloadsContentSectionSideImage2.png",
        "mainImage": "/statics/downloadsContentSectionPlaceHolders.png",
        "mainBoxStyles": styles.MainContentWrapperWhite
    },
    {
        "title": "landing_page.downloads.contents.content3.title",
        "subtitle": "landing_page.downloads.contents.content3.subtitle",
        "ctaButtonText": "landing_page.downloads.contents.content3.ctaButtonText",
        "ctaButtonAction": () => {},
        "sideImage": "/statics/downloadsContentSectionSideImage3.png",
        "mainImage": "/statics/downloadsContentSectionPlaceHolders.png",
        "mainBoxStyles": styles.MainContentWrapperGrey
    }
]


function DonwloadsContentSection({ t }) {
  return (
    <section>
        <Grid 
            container 
            spacing={12}   
            justifyContent="center"   
            alignItems="center"
        > 
            <Grid
                item
                xs={12} 
                md={12}
                justifyContent="center" 
                alignItems="center"
            > 
                <h1 className={styles.MainTitle}>
                    {t('landing_page.downloads.mainTitile')}
                </h1>
                <h3 className={styles.MainSubtitle}>
                    {t('landing_page.downloads.mainSubtitle')}
                </h3>
            </Grid>

            <Grid        
                item
                xs={12}
                md={12}
                justifyContent="center"
                alignItems="center"
            > 
                {contents.map((content, index) => {
                    return (
                        <Grid 
                            key={content.title} 
                            container 
                            flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
                            justifyContent="center"   
                            alignItems="center"
                            className={styles.ContentWrapper}
                        >
                            <Grid
                                item
                                xs={12} 
                                md={4}
                                sx={{ display: 'flex' }}
                                justifyContent="center"
                                alignItems="center"
                                flexDirection='column'
                                className={`${styles.Box} ${content.mainBoxStyles}`}
                            >
                                <img
                                    className={styles.MainImage}
                                    src={content.mainImage}
                                    width={100}
                                    height={100}
                                />

                                <h1 className={styles.ContentMainTitle}>{t(content.title)}</h1>
                                <h3 className={styles.ContentMainSubtitle}>{t(content.subtitle)}</h3>
                                <CtaButton className={styles.DownloadsContentSectionCtaButton} text={t(content.ctaButtonText)}/>

                            </Grid>
                            <Grid 
                                item
                                xs={12} 
                                md={4}
                                justifyContent="center"
                                alignItems="center"
                                className={`${styles.Box}`}
                            > 
                                <Image
                                    className={styles.SideImage}
                                    src={content.sideImage}
                                    width={100}
                                    height={100}
                                />
                            </Grid>

                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    </section>

);
}

export default DonwloadsContentSection;