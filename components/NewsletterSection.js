
import Image from 'next/image';

import Grid from '@mui/material/Grid';

import CtaButton from '../components/CtaButton';


import styles from '../styles/NewsletterSection.module.css';


function NewsletterSection({ t, isLinkedSection }) {
  return (
    <section id={isLinkedSection ? "newsletter" : ""} className={styles.sectionWrapper}>
        <Grid 
            container 
            justifyContent="center"   
            alignItems="center"
            className={styles.NewsletterSection}
        > 
            <Grid 
                item
                xs={12} 
                md={5}
                lg={5}
                xl={5}
                justifyContent="center" 
                alignItems="center"
                className={styles.NewsletterGridElement}
            > 
            <Image
                src="/statics/newsletter_image.webp"
                alt="A descriptive image alt text"
                width={479}
                height={464}
                loading="lazy"
                className={styles.NewsletterImage}
            />
            </Grid>

            <Grid             
                item
                xs={12}
                md={6}
                lg={6}
                xl={5}
                justifyContent="center"
                alignItems="space-between"
                className={styles.NewsletterGridElement}
            > 
                <h3 className={styles.titleWrapper}>
                    <span className={styles.title}>{t('landing_page.newsletter.title')}</span>
                    <span className={styles.title2}>{t('landing_page.newsletter.title2')}</span>
                </h3>
                <h5 className={styles.subtitle}>{t('landing_page.newsletter.subtitle')}</h5>
                <p className={styles.body}>{t('landing_page.newsletter.body')}</p>
                <CtaButton className={styles.NewsletterCtaButton} text={t('landing_page.newsletter.ctaButton')}/>
            </Grid>
        </Grid>
    </section>

);
}

export default NewsletterSection;