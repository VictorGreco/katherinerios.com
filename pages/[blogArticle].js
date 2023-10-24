import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';


import translations from '../public/locales/es/default.json';

import styles from '../styles/BlogArticle.module.css';

const Item = ({ t, content }) => {

  if (content.type === 'img') {
    return (
      <img
        src={`${content.src}`}
        alt={content.alt}
        height={content.height}
        width={content.width}
        className={styles.image}
      />
    )
  }

  if (content.type === 'h1') {
    return (<h1 className={styles.mainTitle}>{content.text}</h1>)
  }

  if (content.type === 'h2') {
    return (<h2 className={styles.secondaryTitle}>{content.text}</h2>)
  }

  if (content.type === 'p') {
    return (<p className={styles.body}>{content.text}</p>)
  }
  
  if (content.type === 'pSpecial') {
    return (<p className={`${styles.body} ${styles.bodySpecial}`}>{content.text}</p>)
  }

  if (content.type === 'pBold') {
    return (<p className={`${styles.secondaryTitle}`}>{content.text}</p>)
  }
}


export default function Home({ t, blogArticleDetailsIndex }) {
  const details = t(`blog.articles.article${blogArticleDetailsIndex + 1}.details`, { returnObjects: true });
    return (
      <section id='blog' className={styles.sectionWrapper}>
          <Grid container className={styles.container}>
            {
              details.map((content, index) => { 
                return (
                  <Grid key={index} item className={styles.item} xs={12}>
                    <Item t={t} content={content} index={index} />
                  </Grid>
                )
              })
            }
          </Grid>
      </section>
    )
}

export const getStaticPaths = (async () => {
    const paths = Object.values(translations.blog.articles).map((article) => ({ 
        params: { blogArticle: `${article.src}` },
    }));

    return {
      paths,
      fallback: false,
    }
  })

export const getStaticProps = async ({ locale, params }) => {
  const translationsProps = await serverSideTranslations(locale ?? 'es', [
    'default',
  ])
  const blogArticleDetailsIndex = Object.values(translations.blog.articles).map((article) => {
    return article.src;
  }).indexOf(params.blogArticle);

  return {
    props: {
      ...translationsProps,
      blogArticleDetailsIndex,
    },
  }
}