// import styles from '../button/button.module.css'

// export default function MyButton(){
//     return (
//         <button className={styles.button}>Click Aquí</button>
//     )
// }
import Button from 'react-bootstrap/Button';

export default function MyButton(){
    return (    
    <>
        <Button variant="warning" href="https://www.doctorwho.tv/" target="_blank">Ver más</Button>
    </>
    )
};
