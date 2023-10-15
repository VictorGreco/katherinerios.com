
import Grid from '@mui/material/Grid';

import styles from '../styles/OpinionsSection.module.css';

const opinions = [
    {
        "testimony": "landing_page.experiance.opinions.opinion1.testimony",
        "author": "landing_page.experiance.opinions.opinion1.author"
    },
    {
        "testimony": "landing_page.experiance.opinions.opinion2.testimony",
        "author": "landing_page.experiance.opinions.opinion2.author"
    },
    {
        "testimony": "landing_page.experiance.opinions.opinion3.testimony",
        "author": "landing_page.experiance.opinions.opinion3.author"
    }
]


function OpinionsSection({ t }) {
  return (
    <section id="experiance">
        <Grid 
            container
            justifyContent="center"
            alignItems="center"
            className={styles.SectionWrapper}
        > 
            <Grid 
                item
                xs={12}
                md={12}
                justifyContent="end" 
                alignItems="center"
            > 
                <h1 className={styles.Title}>{t('landing_page.experiance.title')}</h1>
                <h3 className={styles.Subtitle}>{t('landing_page.experiance.subtitle')}</h3>
            </Grid>

            <Grid             
                item
                xs={12}
                md={12}
                justifyContent="center"
                alignItems="center"
            >
                <Grid 
                    container
                    justifyContent="space-around"
                    alignItems="start"
                >
                    {opinions.map((opinion) => {
                        return (
                            <Grid
                                key={opinion.author}            
                                item
                                xs={12}
                                md={3}
                                justifyContent="center"
                                alignItems="center"
                                className={styles.OpinionWrapper}
                            >
                                <p className={styles.Testimony}>{t(opinion.testimony)}</p>
                                <p className={styles.Author}>{t(opinion.author)}</p>
                            </Grid>
                        )
                    })}
                </Grid>

            </Grid>  
        </Grid>
    </section>

);
}

export default OpinionsSection;