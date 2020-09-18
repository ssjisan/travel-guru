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
const signOut = () =>{
    setLoggedInUser({});
}

    return (
        <div className="navBar">
            <Navbar bg="" variant="light">
                {/********************************************* Logo Start ****************************************************/}
                <Link to="/home">
                    <img src={logo} width="150" height="50" style={{margin:10}}  alt="React Bootstrap logo" />
                </Link>
                {/********************************************* Logo End ******************************************************/}

                {/****************************************** Search Field Start ***********************************************/}
                <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" style={{width: 500}} />
                {/****************************************** Search Field End *************************************************/}

                {/****************************************** Menu Item Start **************************************************/}
                <Nav className="mr-auto"> 
                    <Link className="nav-link" to="/home" style={{color: "white"}}>Home</Link>
                    <Link className="nav-link" to="/blog" style={{color: "white"}}>Blog</Link>
                    <Link className="nav-link" to="/contact" style={{color: "white"}}>Contact</Link>
                    {
                        loggedInUser.email && 
                            <p style={{marginTop: 15 , color:"white"}}> 
                            <img src={loggedInUser.photo} style={{width: 40, borderRadius:50}} alt=""/> {loggedInUser.name} </p>  
                    }
                    {
                        loggedInUser.email && <Link> <Button variant="info" style={{marginTop:15}} onClick={signOut}>  Sign Out  </Button> </Link>  
                    }       
                    {
                        !loggedInUser.email &&  <Link to="/signIn"> <Button variant="info">  Sign In  </Button> </Link> 
                    }
                </Nav>
                {/****************************************** Menu Item End ****************************************************/}   
            </Navbar>
        </div>
    );
};

export default Header;