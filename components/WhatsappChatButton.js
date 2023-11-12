import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import styles from '../styles/WhatsappChatButton.module.css';


export default function WhatsappChatButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className={styles.whatsappWrapper}>
      <a className={styles.whatsappLink}  href="https://wa.me/message/XW3GRYK7VYFGC1" target="_blank">
        <WhatsAppIcon className={styles.whatsappIcon}/>
      </a>
    </Box>
  );
}