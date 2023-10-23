
import Image from 'next/image';

import Grid from '@mui/material/Grid';

import CtaButton from '../components/CtaButton';


import styles from '../styles/DownloadsContentSection.module.css';

const contents = [
    {
        "title": "landing_page.downloads.contents.content1.title",
        "subtitle": "landing_page.downloads.contents.content1.subtitle",
        "ctaButtonText": "landing_page.downloads.contents.content1.ctaButtonText",
        "ctaButtonAction": () => { window.location.replace('https://share-eu1.hsforms.com/1ym2RG8GESimCDAWoVew35A2dfvor')},
        "sideImage": "/statics/downloadsContentSectionSideImage1.webp",
        "mainImage": "/statics/downloadsContentSectionPlaceHolders.png",
        "mainBoxStyles": styles.MainContentWrapperPink
    },
    {
        "title": "landing_page.downloads.contents.content2.title",
        "subtitle": "landing_page.downloads.contents.content2.subtitle",
        "ctaButtonText": "landing_page.downloads.contents.content2.ctaButtonText",
        "ctaButtonAction": () => { window.location.replace('https://share-eu1.hsforms.com/1ym2RG8GESimCDAWoVew35A2dfvor')},
        "sideImage": "/statics/downloadsContentSectionSideImage2.webp",
        "mainImage": "/statics/downloadsContentSectionPlaceHolders.png",
        "mainBoxStyles": styles.MainContentWrapperWhite
    },
    {
        "title": "landing_page.downloads.contents.content3.title",
        "subtitle": "landing_page.downloads.contents.content3.subtitle",
        "ctaButtonText": "landing_page.downloads.contents.content3.ctaButtonText",
        "ctaButtonAction": () => { window.location.replace('https://share-eu1.hsforms.com/1ym2RG8GESimCDAWoVew35A2dfvor')},
        "sideImage": "/statics/downloadsContentSectionSideImage3.webp",
        "mainImage": "/statics/downloadsContentSectionPlaceHolders.png",
        "mainBoxStyles": styles.MainContentWrapperGrey
    }
]


function DonwloadsContentSection({ t }) {
  return (
    <section id="ebooks" className={styles.sectionWrapper}>
        <Grid 
            container 
            justifyContent="center"   
            alignItems="center"
            className={styles.container}
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
                                md={6}
                                sx={{ display: 'flex' }}
                                justifyContent="center"
                                alignItems="center"
                                flexDirection='column'
                                className={`${styles.Box} ${content.mainBoxStyles} ${index % 2 !== 0 ? styles.paddingBox : ""}`}
                            >
                                <img
                                    className={styles.MainImage}
                                    src={content.mainImage}
                                    width={100}
                                    height={100}
                                />

                                <h1 className={styles.ContentMainTitle}>{t(content.title)}</h1>
                                <h3 className={styles.ContentMainSubtitle}>{t(content.subtitle)}</h3>
                                <CtaButton className={styles.DownloadsContentSectionCtaButton} text={t(content.ctaButtonText)} onCLickHandler={content.ctaButtonAction}/>

                            </Grid>
                            <Grid 
                                item
                                xs={12} 
                                md={6}
                                justifyContent="center"
                                alignItems="center"
                                className={`${styles.Box} ${index % 2 === 0 ? styles.paddingBox : ""}`}
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