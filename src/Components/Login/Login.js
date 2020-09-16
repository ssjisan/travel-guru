import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '25ch',
      },
    },
  }));

const Login = () => {
const [loggedInUser, setLoggedInUser] = useContext(UserContext);  
const history = useHistory();
const location = useLocation();
let {from} = location.state || {from : {pathName: "/"}}
const classes = useStyles();

const [newUser, setNewUser] = useState(false);

const [user, setUser] = useState({
  isSignedIn: false,
  name: '',
  email: '',
  photo: ''
})
const provider = new firebase.auth.GoogleAuthProvider();
const signInHandler = () => {
  firebase.auth().signInWithPopup(provider)
  .then(result =>{
    const {displayName,email, photoURL} = result.user;
    const signedInUser = {
      isSignedIn: false,
      name: displayName,
      email: email,
      photo: photoURL
    }
    setUser(signedInUser);
    setLoggedInUser(signedInUser);
    history.replace(from);
    console.log(displayName,email, photoURL);
  })
}

    return (
        <div className="style">
            <div>
              <form action="on" className={classes.root} noValidate autoComplete="off">
                      {
                        newUser && <TextField id="outlined-basic" label="Name" variant="outlined" style={{width:500}}/> 
                      }
                      
                      <br/>
                      <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:500}}/> 
                      <br/>
                      <TextField id="outlined-basic" label="Password" variant="outlined" style={{width:500}}/>
                      <br/>
                      {
                        newUser && <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{width:500}}/>
                      }
                      
                      <br/>
                      {
                        !newUser &&  <Link to="/hotel"> <Button variant="success" style={{width: 500}}>Sign In</Button> <br/> </Link> 

                      }
                      
                      <br/>
                      {
                        newUser && <Button variant="success" style={{width: 500}}>Sign Up</Button> 
                      }
                      <br/>
                      {
                        !newUser && <p style={{margin: "auto", display: "inline"}}>Don't Have an Account? 
                        <button style={{border: 0, backgroundColor: "transparent", color: "red"}} onFocus ={() => setNewUser (!newUser)} >Click Here</button> </p> 
                      }
                      <br/>

                      {
                        newUser && <p style={{margin: "auto", display: "inline"}}>Already have an Account 
                        <button style={{border: 0, backgroundColor: "transparent", color: "red"}} onClick ={() => setNewUser (!newUser)}>Sign in</button> </p>
                      }
                      
                       
                      <p style={{fontWeight:"bold", margin: "auto", marginTop:20, marginBottom: 20}}> OR </p> <br/>
              </form>
            </div>
            <div id='fb-google'>
              <Link to="/hotel"> <Button variant="primary" style={{borderRadius: 20}}>Continue With Facebook</Button> </Link> 
              <br/> 
              
              <Link onClick={signInHandler}> <Button variant="danger" style={{borderRadius: 20}}>Continue With Google</Button>  </Link>
            </div>
        </div>
    );
};

export default Login;