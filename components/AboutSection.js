
import Image from 'next/image';

import Grid from '@mui/material/Grid';

import styles from '../styles/AboutSection.module.css';


function AboutSection({ t }) {
  return (
    <section id="aboutme">
         <Grid
        container
        justifyContent="start"
        alignItems="start"
        className={styles.AboutSection}
        > 
            <Grid 
                item
                xs={12} 
                md={12}
                lg={8}
                justifyContent="end"
                alignItems="end"
                className={styles.LeftBox}
            > 
                <h1 className={styles.TitleWrapper}>
                    <span className={styles.TitleWave}>{t('landing_page.about.title_wave')}</span>
                    <span className={styles.TitleIntro}>{t('landing_page.about.title_intro')}</span>
                </h1>
                <h3 className={styles.Subtitle}>{t('landing_page.about.subtitle')}</h3>
                <p className={styles.ParagraphBold}>{t('landing_page.about.paragraph_1')}</p>
                <p className={styles.GenericParagraph}>{t('landing_page.about.paragraph_2')}</p>
                <p className={styles.GenericParagraph}>{t('landing_page.about.paragraph_3')}</p>
                <p className={styles.GenericParagraph}>
                    <span>{t('landing_page.about.paragraph_4')}</span>
                    <span className={styles.ParagraphBold}>{t('landing_page.about.paragraph_4_cta')}</span>
                </p>
            </Grid>

            <Grid             
                item
                xs={12}
                md={12}
                lg={4}
                justifyContent="center"
                alignItems="center"
                className={styles.ImageWrapper}
            >
                <Image
                    className={styles.ImageWrapper}
                    src="/statics/about.webp"
                    width={620}
                    height={450}
                />

            </Grid>
            <Grid             
                item
                xs={12}
                md={3}
            > 

            </Grid>
    
        </Grid>
    </section>
   
);
}

export default AboutSection;