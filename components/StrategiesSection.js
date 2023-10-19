
import Image from 'next/image';

import Grid from '@mui/material/Grid';

import CtaButton from '../components/CtaButton';


import styles from '../styles/StrategiesSection.module.css';

const questions = [
    'landing_page.strategies.investments.retoricQuestions.question1',
    'landing_page.strategies.investments.retoricQuestions.question2',
    'landing_page.strategies.investments.retoricQuestions.question3',
    'landing_page.strategies.investments.retoricQuestions.question4',
]


function StrategiesSection({ t }) {
  return (
    <section id="strategy" className={styles.sectionWrapper}>
        <Grid 
            container 
            justifyContent="center"   
            alignItems="start"
            className={styles.container}
        > 
            <Grid 
                item
                xs={12}
                md={12}
                lg={6}
                justifyContent="center" 
                alignItems="center"
            > 
                <h1 className={styles.MainTitleWrapper}>
                    <span>{t('landing_page.strategies.investments.titlePart1')}</span>
                    <span className={styles.PowerWord}>{t('landing_page.strategies.investments.titlePowerWord')}</span>
                    <span>{t('landing_page.strategies.investments.titlePart2')}</span>
                </h1>

                <p className={styles.Subtitle}>{t('landing_page.strategies.investments.subtitle')}</p>
                <CtaButton className={styles.StrategiesCtaButton} text={t('landing_page.strategies.investments.ctaButtonText')}/>

            </Grid>

            {/* <Grid             
                item
                xs={12}
                lg={6}
                justifyContent="center"
                alignItems="start"
                className={`${styles.QuestionsWrapper} ${styles.Box}`}
            > 
                {questions.map((question) => {
                    return <p className={styles.Questions} key={question}>{t(question)}</p>
                })}
            </Grid> */}
        </Grid>
    </section>

);
}

export default StrategiesSection;