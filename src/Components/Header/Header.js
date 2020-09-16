import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import logo from '../../Logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'




const Header = () => {
const [loggedInUser, setLoggedInUser] = useContext(UserContext);  
    return (
        <div className="navBar">
            <Navbar bg="" variant="light">
                <Navbar.Brand href="/home">
                <img
                    src={logo}
                    width="150"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" style={{width: 500}} />
                <Nav className="mr-auto"> 
                    <Link className="nav-link" to="/publichome" style={{color: "black"}}>News</Link>
                    <Link className="nav-link" to="/destination" style={{color: "black"}}>Destination</Link>
                    <Link className="nav-link" to="/blog" style={{color: "black"}}>Blog</Link>
                    <Link className="nav-link" to="/contact" style={{color: "black"}}>Contact</Link>
                    {
                        loggedInUser.email && 
                            <p style={{marginTop: 15}}> 
                            <img src={loggedInUser.photo} style={{width: 40, borderRadius:50}} alt=""/> {loggedInUser.name} 
                            <Link><FontAwesomeIcon style={{marginLeft:20}} icon={faPowerOff} /></Link>  </p>  
                    }

                    {!loggedInUser.email &&  <Link to="/signIn"> <Button variant="info">  Sign In  </Button> </Link> }
                   
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;