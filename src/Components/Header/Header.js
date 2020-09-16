import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import logo from '../../Logo.png';
import './Header.css';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <div className="navBar">
            <Navbar bg="" variant="light">
                <Navbar.Brand href="/home">
                <img
                    src={logo}
                    width="100"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" style={{width: 500}} />
                <Nav className="mr-auto"> 
                    <Nav.Link href="#home" style={{color: "black"}}>News</Nav.Link>
                    <Nav.Link href="/destination" style={{color: "black"}}>Destination</Nav.Link>
                    <Nav.Link href="#blog" style={{color: "black"}}>Blog</Nav.Link>
                    <Nav.Link href="#contact" style={{color: "black"}}>Contact</Nav.Link>
                    <Link to="/signIn"> <Button variant="info">  Sign In  </Button> </Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;