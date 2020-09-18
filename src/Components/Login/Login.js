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
/*********************************************Context API Start******************************************************************/ 
const Login = () => {
const classes = useStyles();
const [loggedInUser, setLoggedInUser] = useContext(UserContext);  
const history = useHistory();
const location = useLocation();
let {from} = location.state || {from : {pathName: "/"}}
/*********************************************Context API End********************************************************************/ 

const [newUser, setNewUser] = useState(false);


const [user, setUser] = useState({
  isSignedIn: false,
  name: '',
  email: '',
  password: '',
  error: '',
  success: false,
  photo: ''
})

/************************************************Email-Password Auth Start*******************************************************/
const handleBlur = (event) =>{
  let isFormValid
  
  if(event.target.name === "email"){
    isFormValid  = /\S+@\S+\.\S+/.test(event.target.value);
  }
  if (event.target.name === 'password'){
    isFormValid = /\d{1}/.test(event.target.value) && event.target.value.length > 8;
  }
  if (isFormValid){
    const newUserData = {...user};
    newUserData[event.target.name] = event.target.value;
    setUser(newUserData);
    console.log(user.password, user.email);
  }
}
const signIn = (event) => {
  if(!newUser && user.email && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(result => {
      const signInUser = {...user};
      signInUser.error = '';
      signInUser.success= true;
      setUser(signInUser);
      console.log(user.name, user.email, user.password);
      setLoggedInUser(signInUser);
      history.replace(from);
    })
    .catch(error=> {
      const newUserData = {...user};
      newUserData.error = error.Message;
      var errorMessage = error.Message;
      console.log(errorMessage );
      setUser(newUserData);
    });
  }
}
const signUp = (event) =>{
  if(newUser && user.email && user.password){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(result => {
      const newUserData = {...user};
      newUserData.error = " ";
      newUserData.success= true;
      setUser(newUserData);
      console.log(user.name, user.email, user.password);
    })
    .catch(error => {
      const newUserData = {...user};
      newUserData.error = error.message;
      var errorMessage = error.message;
      console.log(errorMessage );
      setUser(newUserData);
    });
  }
}

/************************************************Email-Password Auth Start*******************************************************/


/**************************************************Googel Auth Start************************************************************/ 
const googelProvider = new firebase.auth.GoogleAuthProvider();
const signInHandler = () => {
firebase.auth().signInWithPopup(googelProvider)
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
  })
}
/**************************************************Googel Auth End************************************************************/ 


/*******************************************************Facebook Auth Start***************************************************/
const fbProvider = new firebase.auth.FacebookAuthProvider(); 
const fbSignIn = () => {
  firebase.auth().signInWithPopup(fbProvider)
  .then(result => {
    const {displayName,  photoURL} = result.user;
    console.log(displayName,  photoURL);
  })
}

return (
  
  <div className="style">
      {/******************************************************** E-mail Auth Start **************************************************/}
      <div>

      <p style={{color: "red"}}>{user.error}</p>
        {
          user.success && <p style={{color: "green"}}>User {newUser ? "Created" : "logged In"} Successfully</p>
        }
        <form action="on" className={classes.root} noValidate autoComplete="off">
            {
              newUser && <TextField id="outlined-basic" label="Name" name="name" onBlur={handleBlur} variant="outlined" style={{width:500}}/> 
            }
            <br/>
            <TextField id="outlined-basic" label="Email" name="email" onBlur={handleBlur} variant="outlined" style={{width:500}}/> 
            <br/>
            <TextField id="outlined-basic" label="Password" name="password" type="password" onBlur={handleBlur} variant="outlined" style={{width:500, color:"white"}}/>
            <br/>
            {
              newUser && <TextField id="standard-basic" label="Confirm Password" type="password" name="confirmPassword" onBlur={handleBlur} variant="outlined" color="secondary" style={{width:500}}/>
            }
            <br/>
            {
              !newUser &&  <Link to="/signIn"> <Button variant="success" style={{width: 500}} onClick={signIn}>Sign In</Button>  </Link> 

            }
            <br/>
            {
              newUser && <Button variant="success" onClick={signUp}style={{width: 500}}>Sign Up</Button> 
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
      {/******************************************************** E-mail Auth End ****************************************************/}


      {/**************************************************** FaceBook-Google Auth Start *********************************************/}
      <div id='fb-google'>
            <Link to="/hotel" onClick={fbSignIn}> <Button variant="primary" style={{borderRadius: 20}}>Continue With Facebook</Button> </Link> 
            <br/> 
            <Link to="/hotel" onClick={signInHandler}> <Button variant="danger" style={{borderRadius: 20}}>Continue With Google</Button> </Link>
      </div>
      {/**************************************************** FaceBook-Google Auth Start *********************************************/}
      
  </div>
    );
};

export default Login;