
import Button from '@mui/material/Button';


function CtaButton({ text, className, onCLickHandler }) {
  return (
    <Button 
      className={className} 
      variant="contained"
      onClick={onCLickHandler}
    >{text}</Button>
);
}

export default CtaButton;