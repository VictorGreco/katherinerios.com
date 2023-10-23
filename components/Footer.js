
import Grid from '@mui/material/Grid';

import styles from '../styles/Footer.module.css';

function FooterSection({ t }) {
  return (
    <section id="footer">
        <Grid 
            container
            justifyContent="center"
            alignItems="center"
            className={styles.Footer}
        > 
            <Grid 
                item
                xs={12}
                md={12}
                justifyContent="center" 
                alignItems="center"
            > 
                <h3>{t('landing_page.footer.copy')}</h3>
            </Grid>
        </Grid>
    </section>

);
}

export default FooterSection;