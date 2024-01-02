import Button from 'react-bootstrap/Button';

import styles from './button.module.css';

export default function MyButton({ buttonText }){
    return (    
        <Button className={`latoBold ${styles.button}`} href="https://www.doctorwho.tv/" target="_blank">
            { buttonText }
        </Button>
    );
};
