import { Nav, NavLink, Navbar, NavbarBrand } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import InputGroupText from 'react-bootstrap/InputGroupText';

import SocialMedia from '../socialmedia/socialmedia';

import styles from './header.module.css';

export default function Header( {setSearchQuery} ) {
  return (
    <Navbar expand="lg" className={`justify-content-between montserratSemibold ${styles.menu}`}>
      <Nav className={styles.menuItems}>
        <NavLink href='/conoce-a'>Conoce a</NavLink>
        <NavLink href='/doctores'>Doctores</NavLink>
        <NavLink href='#contact'>Contacto</NavLink>
      </Nav>
      <NavbarBrand href='/'>
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
            type='text'
            placeholder="Buscar"
            aria-label="Búsqueda"
            aria-describedby="basic-addon1"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
      </Form>
      <div className={styles.social}>
        <SocialMedia />
      </div>
    </Navbar>
  );
};
