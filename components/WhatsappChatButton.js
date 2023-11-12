import * as React from 'react';
import Box from '@mui/material/Box';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import styles from '../styles/WhatsappChatButton.module.css';


export default function WhatsappChatButton() {

  return (
    <Box className={styles.whatsappWrapper}>
      <a className={styles.whatsappLink}  href="https://wa.me/message/XW3GRYK7VYFGC1" target="_blank">
        <WhatsAppIcon className={styles.whatsappIcon}/>
      </a>
    </Box>
  );
}