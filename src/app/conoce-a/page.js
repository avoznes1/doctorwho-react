import MyButton from '../components/button/button';
import MobileButton from '../components/button/buttonMobile';

import styles from './conoce.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Conoce() {
    return (
        <div className={styles.body}>
            <Container fluid className={styles.main}> 
                <Row>
                    <Col lg={7} xs={12}>
                        <h1 className='latoBold'>Conoce a ... decimotercera doctor</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7} xs={{ span: 12, order: 'last' }} className={styles.leftBox}>
                        <p className='montserratRegular'>
                            Lorem ipsum dolor sit amet consectetur.<br />
                            Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.
                        </p>
                        <div className={styles.button}>
                            <MyButton buttonText="Ver más" padding="1rem 9.5rem" />
                        </div>
                        <div className={styles.mobileButton}>
                            <MobileButton buttonText="Ver más" padding="0.7rem 5rem" />
                        </div>
                        <div>
                            <img
                                src='./assets/img/symbols/persistencia.png'
                            />
                        </div>
                    </Col>
                    <Col lg={4} xs={{ span: 12, order: 'first' }} className={styles.rightBox}>
                        <img
                            src='./assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg'
                            alt='Doctora decimotercera - Jodie Whittaker'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};