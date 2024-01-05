'use client'

import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import DoctorCard from '../components/card/card';

import styles from './doctores.module.css';
import docData from '@/app/doctors.json';
import { useSearchParams } from 'next/navigation';

export default function Doctores() {
    const searchParams = useSearchParams();
    const valueToSearch = searchParams.get('search') ?? ''; 
    const [filteredCards, setFilteredCards] = useState([]);

    const filterCards = () => {
        const filtered = docData.doctors.filter(
            (data) => 
            data.doctor.toLowerCase().includes(valueToSearch.toLowerCase())
            || data.actor.toLowerCase().includes(valueToSearch.toLowerCase())
        );
        setFilteredCards(filtered);
    };

    useEffect(() => {filterCards();}, [valueToSearch]);

    return (
        <div className={styles.body}>
            <Container fluid>
                <h1>Doctores</h1>
                <Row xs={1} lg={4} className="g-5">
                    {
                        (valueToSearch === '' ? docData.doctors : filteredCards)
                        .map((data, i) => 
                                (
                                    <Col key={i}>
                                        <DoctorCard {...data} />
                                    </Col>
                                ))
                    }
                </Row>
            </Container>
        </div>
    );
};