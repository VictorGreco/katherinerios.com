
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel'

import translations from '../public/locales/es/default.json';
import styles from '../styles/OpinionsSection.module.css';

function OpinionsSection({ t, isMobile }) {

  const testimonies = Object.keys(translations.landing_page.experiance.opinions);

  console.log(isMobile);

  return (
    <section id="experiance" className={styles.sectionWrapper}>
        <Grid 
            container
            justifyContent="center"
            alignItems="center"
            className={styles.SectionWrapper}
            sx={{background: `linear-gradient(to left, rgba(0,0,0,0.3), 100%, transparent), center / cover no-repeat  url('/statics/opinionsSectionImage${isMobile}.webp')`}}
        > 
            <Grid 
                item
                xs={12}
                md={12}
                justifyContent="end" 
                alignItems="center"
                className={styles.TitleWrapper}
            > 
                <h1 className={styles.Title}>{t('landing_page.experiance.title')}</h1>
                <h2 className={styles.Subtitle}>{t('landing_page.experiance.subtitle')}</h2>
            </Grid>

            <Grid             
                item
                xs={12}
                md={12}
                justifyContent="center"
                alignItems="center"
            >
                <Carousel 
                    autoPlay={true} 
                    stopAutoPlayOnHover={false} 
                    animation={'slide'} 
                    swipe={false} 
                    indicators={false} 
                    cycleNavigation={true} 
                    interval={10000} 
                    duration={10000} 
                    className={styles.caroussel} 
                    sx={{width: '100vw'}}
                >
                    {testimonies.map((commentBoxe, index) => {
                        const testimony = t(`landing_page.experiance.opinions.opinion${index + 1}.testimony`);
                        const author = t(`landing_page.experiance.opinions.opinion${index + 1}.author`);

                        return (
                            <Grid
                                key={index}
                                container
                                justifyContent="space-around"
                                alignItems="start"
                                flexWrap='wrap'
                            >
                                <Grid
                                    key={author}            
                                    item
                                    xs={12}
                                    md={3}
                                    justifyContent="center"
                                    alignItems="center"
                                    className={styles.OpinionWrapper}
                                >
                                    <p className={styles.Testimony}>{testimony}</p>
                                    <p className={styles.Author}>{author}</p>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Carousel>

            </Grid>  
        </Grid>
    </section>

);
}

export default OpinionsSection;