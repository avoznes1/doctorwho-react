'use client'

import { useState } from 'react';
import { Nav, NavLink, Navbar, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import InputGroupText from 'react-bootstrap/InputGroupText';

import SocialMedia from '../socialmedia/socialmedia';

import styles from './header.module.css';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();

    const query = e.target.value;

    if (!query) {
      router.push('/doctores');
      return;
    }
    
    router.push(`/doctores?search=${query}`);
  };

  return (
    <Navbar expand="lg" className={`montserratSemibold justify-content-around ${styles.menu}`} expanded={expanded}>
      <NavbarToggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className={styles.menuItems}>
          <NavLink href='/conoce-a'>Conoce a</NavLink>
          <NavLink href='/doctores'>Doctores</NavLink>
          <NavLink href='/contacto'>Contacto</NavLink>
        </Nav>
        <Form className={styles.search}>
          <InputGroup>
            <InputGroupText id="basic-addon1" className={styles.searchBar}>
              <img
                src='./assets/img/icons/material-symbols-light_search.svg'
                alt='Logo de Doctor Who'
              />
            </InputGroupText>
            <FormControl
              className={`montserratSemibold ms-lg-auto ${styles.searchBar}`}
              type='text'
              placeholder="Buscar"
              aria-label="Búsqueda"
              aria-describedby="basic-addon1"
              onKeyDown={
                (e) => {
                  if (e.key !== 'Enter') {
                    return;
                  }
                  handleSearch(e);
                }
              }
            />
          </InputGroup>
        </Form>
        <div className={`ms-lg-auto ${styles.social}`}>
          <SocialMedia />
        </div>
        </NavbarCollapse>
        <NavbarBrand href='/'>
          <img
            src='./assets/img/logos/logo.png'
            className={styles.logoDW}
            alt='Logo de Doctor Who'
          />
        </NavbarBrand>
    </Navbar>
  );
};