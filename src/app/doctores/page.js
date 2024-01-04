import styles from './doctores.module.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import DoctorCard from '../components/card/card';

import docData from '@/app/doctors.json';

export default function Doctores() {
    return (
        <body className={styles.body}>
            <Header />
            <Container>
                <h1>Doctores</h1>
                <Row xs={1} lg={4} className="g-4">
                    {
                        docData.doctors.map((data, i) => (
                            <Col key={i}>
                                <DoctorCard {...data} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <Footer />
        </body>
    );
};

// {/* <DoctorCard docData={docData} /> */}