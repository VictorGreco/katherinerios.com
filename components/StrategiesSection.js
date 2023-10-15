
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
    <Grid 
        container 
        spacing={12}   
        justifyContent="center"   
        alignItems="start"
    > 
        <Grid 
            item
            xs={12} 
            md={4}
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

        <Grid             
            item
            xs={12}
            md={4}
            justifyContent="center"
            alignItems="start"
            className={styles.QuestionsWrapper}
        > 
            {questions.map((question) => {
                return <p className={styles.Questions} key={question}>{t(question)}</p>
            })}
        </Grid>
    </Grid>
);
}

export default StrategiesSection;