import { Card, CardBody, CardImg, CardTitle, CardText } from 'react-bootstrap';
import MyButton from '@/app/components/button/button';

import styles from './card.module.css';

export default function DoctorCard( { image, doctor, actor, screen_time } ) {
  return (
    <Card style={styles.docCard}>
    <CardImg variant="top" src={image} />
      <CardBody>
      <CardTitle>{doctor}</CardTitle>
        <CardText>
          {actor}
          <br />
          {screen_time}
        </CardText>
        <MyButton buttonText="Ver ahora" padding="0.65rem 3.4rem"/>
      </CardBody>
    </Card>
  );
};