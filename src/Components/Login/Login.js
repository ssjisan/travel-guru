import React from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        width: '25ch',
      },
    },
  }));

const Login = () => {
const classes = useStyles();
    return (
        <div className="style">
            <div>
              <form className={classes.root} noValidate autoComplete="off">
                      <TextField id="outlined-basic" label="Name" variant="outlined" style={{width:500}}/> 
                      <br/>
                      <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:500}}/> 
                      <br/>
                      <TextField id="outlined-basic" label="Password" variant="outlined" style={{width:500}}/>
                      <br/>
                      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{width:500}}/>
                      <br/>
                      <Button variant="success" style={{width: 500}}>Sign In</Button> <br/>
                      <p style={{margin: "auto", display: "inline"}}>Don't Have an Account? <button style={{border: 0, backgroundColor: "transparent", color: "blue"}}>Sign Up</button> </p> <br/>
                      <p style={{margin: "auto", display: "inline"}}>Already have an Account <button style={{border: 0, backgroundColor: "transparent", color: "blue"}}>Sign in</button> </p>
                      <p style={{margin: "auto", marginTop:20, marginBottom: 20}}> OR </p>
              </form>
            </div>
            <div id='fb-google'>
              <Button variant="primary" style={{borderRadius: 20}}>Continue With Facebook</Button>
              <br/> 
              <Button variant="danger" style={{borderRadius: 20}}>Continue With Google</Button> 
            </div>
        </div>
    );
};

export default Login;