'use client'

import styles from './doctores.module.css';

import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import DoctorCard from '../components/card/card';

import docData from '@/app/doctors.json';

export default function Doctores() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);

    const filterCards = () => {
        const filtered = docData.doctors.filter(
            (data) => 
            data.doctor.toLowerCase().includes(searchQuery.toLowerCase())
            || data.actor.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCards(filtered);
    };

    useEffect(() => {filterCards();}, [searchQuery]);

    return (
        <body className={styles.body}>
            <Header setSearchQuery={setSearchQuery} />
            <Container>
                <h1>Doctores</h1>
                <Row xs={1} lg={4} className="g-4">
                    {
                        (searchQuery === '' ? docData.doctors : filteredCards)
                        .map((data, i) => 
                                (
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