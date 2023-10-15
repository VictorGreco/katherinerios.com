import styles from './page.module.css'

import Image from 'next/image'

import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <Grid container spacing={2}>
      <Grid xs={8}>
        <main>
          <Grid container spacing={2}>
            <Grid xs={8}>
            {/* <Image
              src="/top_image.jpeg"
              width={300}
              height={200}
              alt="Picture of the author"
            /> */}
            </Grid>
            <Grid xs={2}>
              Katherin Rios
            </Grid>
          </Grid>

        </main>
      </Grid>
    </Grid>


  )
}
