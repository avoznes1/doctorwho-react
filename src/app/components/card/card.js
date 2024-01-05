import { Card, CardBody, CardImg, CardTitle, CardText } from 'react-bootstrap';
import MyButton from '@/app/components/button/button';

import styles from './card.module.css';

export default function DoctorCard( { image, doctor, actor, screen_time } ) {
  return (
    <Card className={styles.docCard}>
    <CardImg className={styles.docCardImg} variant="top" src={image} />
      <CardBody>
      <CardTitle className={styles.docCardTitle}>{doctor}</CardTitle>
        <CardText className={`montserratRegular ${styles.docCardText}`}>
          <i>{actor}</i>
          <br />
          {screen_time}
        </CardText>
        <MyButton buttonText="Ver más" padding="0.3rem 4rem"/>
      </CardBody>
    </Card>
  );
};