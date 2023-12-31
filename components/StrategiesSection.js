import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';

import CtaButton from '../components/CtaButton';
import styles from '../styles/StrategiesSection.module.css';

const items = [
    {
        h1: ['landing_page.strategies.sells.titlePart1', 'landing_page.strategies.sells.titlePowerWord', 'landing_page.strategies.sells.titlePart2'],
        p: "landing_page.strategies.sells.subtitle",
        buttonText: "landing_page.strategies.sells.ctaButtonText",
        gridSize: {
            default: 12,
            lg: 5
        }
    },
    {
        h1: ['landing_page.strategies.investments.titlePart1', 'landing_page.strategies.investments.titlePowerWord', 'landing_page.strategies.investments.titlePart2'],
        p: "landing_page.strategies.investments.subtitle",
        buttonText: "landing_page.strategies.investments.ctaButtonText",
        gridSize: {
            default: 12,
            lg: 5
        }
    },
    {
        h1: ['landing_page.strategies.rents.titlePart1', 'landing_page.strategies.rents.titlePowerWord', 'landing_page.strategies.rents.titlePart2'],
        p: "landing_page.strategies.rents.subtitle",
        buttonText: "landing_page.strategies.rents.ctaButtonText",
        gridSize: {
            default: 12,
            lg: 5
        }
    }
]

const CtaTextBox = ({item, t}) => {
    return (
        <>
            <h1 className={styles.MainTitleWrapper}>
                <span>{t(item.h1[0])}</span>
                <span className={styles.PowerWord}>{t(item.h1[1])}</span>
                <span>{t(item.h1[2])}</span>
            </h1>

            <p className={styles.Subtitle}>{t(item.p)}</p>


            <CtaButton 
                className={`${styles.StrategiesCtaButton} ${styles.StrategiesCtaButtonAlternate}`} 
                text={t(item.buttonText)} 
                onCLickHandler={() => window.location.href ='https://calendly.com/tecnicas-de-estudio/vamos-a-conocernos'}/>
        </>
    )
}

function StrategiesSection({ t, isMobile }) {

    return (
    <section id="strategy" className={styles.sectionWrapper}>
        <Grid 
            container 
            justifyContent="center"   
            alignItems="start"
            className={styles.container}
            sx={{height: '100%'}}
        > 
                <Carousel
                    navButtonsAlwaysVisible
                    navButtonsProps={{
                        style: {
                            backgroundColor: 'transparent',
                            color: '#ff7640',
                        }
                    }} 
                    autoPlay={false} 
                    stopAutoPlayOnHover={true} 
                    animation={'slide'} 
                    swipe={true} 
                    indicators={true} 
                    cycleNavigation={true} 
                    interval={10000} 
                    duration={1000} 
                    className={styles.caroussel}
                    sx={ { width: '100vw', background: `linear-gradient(to right, rgba(0,0,0,0.4), 100%, rgba(0,0,0,0.4)), left / cover no-repeat  url('/statics/cover${isMobile}.webp')` } }
                >
                    {
                        items.map( (item, i) => {
                            return (
                                 <Grid
                                    key={i}
                                    item
                                    xs={item.gridSize.default}
                                    md={item.gridSize.default}
                                    lg={item.gridSize.lg || item.gridSize.default}
                                    justifyContent="center" 
                                    alignItems="center"
                                    className={styles.grid}
                                    > 
                                        <CtaTextBox item={item} t={t} />
                                    </Grid>
                            )
                        })
                    }
                </Carousel>


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