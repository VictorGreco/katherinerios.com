
import Image from 'next/image';

import Grid from '@mui/material/Grid';

import styles from '../styles/IntroductionSection.module.css';


function IntroductionSection({ t }) {
  return (
    <Grid 
        container
        justifyContent="start"
        alignItems="start"
    > 
        <Grid 
            item
            xs={12}
            md={8}
            justifyContent="start" 
            alignItems="center"
        > 
        <Image
            src="/statics/introduction_image.webp"
            alt="A descriptive image alt text"
            width={1300}
            height={1300}
            loading="lazy"
            className={styles.IntroductionSectionImage}
        />
        </Grid>

        <Grid             
            item
            xs={12}
            md={2}
            justifyContent="center"
            alignItems="center"
            className={styles.NewsletterGridElement}
        > 
            <div className={styles.CoolNameWrapper}>
                <span className={styles.Coolname}>Katherin</span>
                <span className={styles.Coolsurname}>Rios</span>
            </div>
        </Grid>
    </Grid>
);
}

export default IntroductionSection;