import { Card, CardBody, CardImg, CardTitle, CardText } from 'react-bootstrap';
import MyButton from '@/app/components/button/button'

export default function DoctorCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <CardImg variant="top" src="holder.js/100px180" />
      <CardBody>
      <CardTitle>{JsonData.doctor[0]}</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <MyButton />
      </CardBody>
    </Card>
  );
}