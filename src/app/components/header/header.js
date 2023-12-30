import styles from '../header/header.module.css';

import { Nav, NavLink, Navbar, NavbarBrand } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import InputGroupText from 'react-bootstrap/InputGroupText';

import SocialMedia from '../socialmedia/socialmedia';

export default function Header() {
  return (
    <Navbar expand="lg" className={`justify-content-between montserratSemibold ${styles.menu}`}>
      <Nav className={styles.menuItems}>
        <NavLink href='#home'>Conoce a</NavLink>
        <NavLink href='#doctors'>Doctores</NavLink>
        <NavLink href='#contact'>Contacto</NavLink>
      </Nav>
      <NavbarBrand href='#home'>
        <img
          src='./assets/img/logos/logo.png'
          className={styles.logoDW}
          alt='Logo de Doctor Who'
        />
      </NavbarBrand>
      <Form className={styles.search}>
        <InputGroup>
          <InputGroupText id="basic-addon1" className={styles.searchBar}>
          <img
          src='./assets/img/icons/material-symbols-light_search.svg'
          alt='Logo de Doctor Who'
        />
          </InputGroupText>
          <FormControl 
            className={`montserratSemibold ${styles.searchBar}`}
            placeholder="Buscar"
            aria-label="Búsqueda"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Form>
      <SocialMedia />
    </Navbar>
  );
};
