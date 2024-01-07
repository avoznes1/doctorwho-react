'use client'
import Button from 'react-bootstrap/Button';

import styles from './contacto.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, FormControl } from 'react-bootstrap';

import { useState } from 'react';

export default function Contacto() {
    const [formData, setFormData] = useState(
        {
            nombre: '',
            email: '',
            mensaje: '',
        }
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
        alert('El mensaje se ha enviado con éxito');
    };

    return (
        <div className={styles.main}>
            <Container fluid>
                <Row>
                    <Col lg={5} className={styles.leftBox}>
                        <h1 className='latoBold'>Envia tu mensaje al Doctor</h1>
                        <img
                            src='./assets/img/symbols/persistencia-2.png'
                        />
                        <img
                            src='./assets/img/symbols/resistencia.png'
                        />
                        <img
                            src='./assets/img/symbols/vencer.png'
                        />
                    </Col>
                    <Col lg={{ span: 5, offset: 2 }}>
                        <Form className={styles.formMain} onSubmit={handleSubmit} autoComplete="off">
                            <FormControl
                                className={styles.formInput}
                                type="text"
                                placeholder="Nombre *"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                            <FormControl
                                className={styles.formInput}
                                type="text"
                                placeholder="Email *"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <FormControl
                                className={styles.formInput}
                                as="textarea" rows={6}
                                placeholder="Mensaje *"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                            />
                            <Button className={`latoBold ${styles.formButton}`} type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};