import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useFirebase from './../../Hook/useFirebase';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../image/logo.png';

const Header = () => {
  const {user, handleLogout } = useFirebase();
    return (

      
  <Navbar className="navmenu" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
  <Container>
      <Navbar.Brand href="#home" className="img"><img src={logo} alt="" width="100" height="40"/></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <NavLink to="/home" className="items">
                    <li>Home</li>
                  </NavLink>
                 <NavLink to="/about" className="items">
                    <li>About</li>
                  </NavLink>
                  <NavLink to="/explore" className="items">
                  <li>Explore</li>
                  </NavLink>
                  <NavLink to="/offer" className="items">
                  <li>Offer</li>
                  </NavLink>
                  {user.email && <li className="items" style={{ color: "#fff" }}>{user.displayName}</li>}
                     {
              user.email ?
                      <><NavLink to="/dashboard" className="items">
                      <li>Dashboard</li>
                       </NavLink>
                          <button className='items btn-danger' onClick={handleLogout}><li>Log Out</li></button></> :
                         <NavLink className='items' to="/login">Login</NavLink>
                   }
      </Navbar.Collapse>
  </Container>
  </Navbar>
      
    );
};

export default Header;