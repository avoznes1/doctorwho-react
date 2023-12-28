import { Card, CardBody, CardImg, CardTitle, CardText } from 'react-bootstrap';
import MyButton from '@/app/components/button/button';

import docData from '@/app/doctors.json';

export default function DoctorCard() {
  return (
    <div className="d-flex">
      {
        docData.doctors.map((data, i) => (
          <div className="border m-2" key={i}>
            <Card style={{ width: '18rem' }}>
            <CardImg variant="top" src={data.image} />
              <CardBody>
              <CardTitle>{data.doctor}</CardTitle>
                <CardText>
                  {data.actor}
                  <br />
                  {data.screen_time}
                </CardText>
                <MyButton />
              </CardBody>
            </Card>
          </div>
        ))
      }
    </div>
  );
};