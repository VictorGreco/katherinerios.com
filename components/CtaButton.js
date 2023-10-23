
import Button from '@mui/material/Button';

import styles from '../styles/CtaButton.module.css';

function CtaButton({ text, className, onCLickHandler }) {
  return (
    <Button 
      className={`${className} ${styles.mainColors}`} 
      variant="contained"
      onClick={onCLickHandler}
    >{text}</Button>
);
}

export default CtaButton;