import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import translations from '../../public/locales/es/default.json';

import styles from '../../styles/BlogSection.module.css';

export default function Home({ t }) {

  const articleList = Object.keys(translations.blog.articles);
  return (
    <section id='blog' className={styles.sectionWrapper}>
        <Grid container className={styles.container}>
            {
                articleList.map((article, index) => {
                    const path = t(`blog.articles.article${index + 1}.src`);
                    const title = t(`blog.articles.article${index + 1}.preview.title`);
                    const summary = t(`blog.articles.article${index + 1}.preview.summary`);
                    const continueReading = t(`blog.articles.article${index + 1}.preview.continueReading`);

                    return (
                        <Grid 
                            item
                            xs={12}
                            md={4}
                            lg={3}
                            key={index}
                            className={styles.item}
                        >
                            <Card sx={{ maxWidth: 345, margin: '20px' }}>
                                <CardMedia
                                    component="img"
                                    alt={path}
                                    height="280"
                                    image={`/statics/blog/articles/${path}/main-image.png`}
                                />
                                <CardContent>
                                    <a href={`/${path}`}>
                                        <h2 className={styles.title}>
                                            {title}
                                        </h2>
                                    </a>
                                    <p className={styles.body}>
                                        {summary}
                                    </p>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        className={styles.subtitle}
                                        size="small"
                                        onClick={() => { window.location.href=`/${path}`}}
                                    >{continueReading}</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    </section>
  )
}

export const getStaticProps = async ({ locale }) => {
  const translationsProps = await serverSideTranslations(locale ?? 'es', [
    'default',
  ])

  return {
    props: {
      ...translationsProps,
    },
  }
}