import Button from 'react-bootstrap/Button';

import styles from './button.module.css';

export default function MyButton({ buttonText, padding }){
    const dynamicStyles = {
        padding,
      };

    return (    
        <Button className={`latoBold ${styles.button}`} href="https://www.doctorwho.tv/" target="_blank" style={{ ...dynamicStyles }}>
            { buttonText }
        </Button>
    );
};
