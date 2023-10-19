
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel'


import styles from '../styles/OpinionsSection.module.css';

const commentBoxes = [
    [
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
    ],
    [
        {
            "testimony": "landing_page.experiance.opinions.opinion4.testimony",
            "author": "landing_page.experiance.opinions.opinion4.author"
        },
        {
            "testimony": "landing_page.experiance.opinions.opinion5.testimony",
            "author": "landing_page.experiance.opinions.opinion5.author"
        },
        {
            "testimony": "landing_page.experiance.opinions.opinion6.testimony",
            "author": "landing_page.experiance.opinions.opinion6.author"
        }
    ],
    [
        {
            "testimony": "landing_page.experiance.opinions.opinion7.testimony",
            "author": "landing_page.experiance.opinions.opinion7.author"
        },
        {
            "testimony": "landing_page.experiance.opinions.opinion8.testimony",
            "author": "landing_page.experiance.opinions.opinion8.author"
        },
        {
            "testimony": "landing_page.experiance.opinions.opinion9.testimony",
            "author": "landing_page.experiance.opinions.opinion9.author"
        }
    ],
    [
        {
            "testimony": "landing_page.experiance.opinions.opinion10.testimony",
            "author": "landing_page.experiance.opinions.opinion10.author"
        },
        {
            "testimony": "landing_page.experiance.opinions.opinion11.testimony",
            "author": "landing_page.experiance.opinions.opinion11.author"
        },
        {
            "testimony": "landing_page.experiance.opinions.opinion12.testimony",
            "author": "landing_page.experiance.opinions.opinion12.author"
        }
    ],
    [
        {
            "testimony": "landing_page.experiance.opinions.opinion13.testimony",
            "author": "landing_page.experiance.opinions.opinion13.author"
        },
        {
            "testimony": "landing_page.experiance.opinions.opinion14.testimony",
            "author": "landing_page.experiance.opinions.opinion14.author"
        },
        {
            "testimony": "landing_page.experiance.opinions.opinion15.testimony",
            "author": "landing_page.experiance.opinions.opinion15.author"
        }
    ]
];


function OpinionsSection({ t }) {
  return (
    <section id="experiance" className={styles.sectionWrapper}>
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
                className={styles.TitleWrapper}
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
                <Carousel autoPlay={true} stopAutoPlayOnHover={true} animation={'slide'} swipe={false} indicators={false} cycleNavigation={true} interval={30000} duration={30000} className={styles.caroussel} sx={ {width: '100vw'} }>
                    {commentBoxes.map((commentBoxe) => {
                        return (
                            <Grid 
                                container
                                justifyContent="space-around"
                                alignItems="start"
                                flexWrap='wrap'
                            >
                                    {commentBoxe.map((opinion) => {
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
                        )
                    })}
                </Carousel>

            </Grid>  
        </Grid>
    </section>

);
}

export default OpinionsSection;