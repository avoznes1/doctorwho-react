import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import MyButton from '../components/button/button'

import styles from './conoce.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Conoce() {
    return (
        <body className={styles.body}>
            <Header setSearchQuery={setSearchQuery}/>
            <Container fluid className={styles.main}> 
                <Row>
                    <Col lg={7} className={styles.leftBox}>
                        <h1 className='latoBold'>Conoce a ... decimotercera doctor</h1>
                        <p className='montserratRegular'>
                            Lorem ipsum dolor sit amet consectetur.<br />
                            Convallis maecenas ac pharetra metus justo amet nunc amet. Hac pellentesque proin sapien duis natoque. Risus enim duis quis egestas non. Morbi ut potenti egestas id pharetra gravida interdum nam.
                        </p>
                        <div className={styles.button}>
                            <MyButton buttonText="Ver más" padding="1.1rem 9.5rem" />
                        </div>
                        <div>
                            <img
                                src='./assets/img/symbols/persistencia.png'
                            />
                        </div>
                    </Col>
                    <Col lg={4} className={styles.rightBox}>
                        <img
                            src='./assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg'
                            alt='Doctora decimotercera - Jodie Whittaker'
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </body>
    );
};