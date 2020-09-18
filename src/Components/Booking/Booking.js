import React, { useContext } from 'react';
import './Booking.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from 'react-bootstrap/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link, useParams } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';
import { UserContext } from '../../App';
import Card from 'react-bootstrap/Card';
import fakeData from '../../FakeData/Destination';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));



const Booking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
  const classes = useStyles();
  /***************************************************** Origin Start *********************************************************/ 
  const [origin, setOrigin] = React.useState('');
  const handleOrigin = (event) => {
    setOrigin(event.target.value);
    setDestination(event.target.value);
  };
  /****************************************************** Origin End **********************************************************/
  
  
  /****************************************************** Place Redirect Start ************************************************/ 
  const {placeId} = useParams();
  const place = fakeData.find (place => place.id == placeId)
  /****************************************************** Place Redirect Start ************************************************/


  /***************************************************** Destination Start ****************************************************/ 
  const [destination, setDestination] = React.useState('');
  const handleDestination = (event) => {
    setDestination(event.target.value);
  };
  /***************************************************** Destination End *******************************************************/ 


    return (
        <div id="bookingContainer">
          {/*********************************** Card For Location Details Start  *******************************************/}
          <div class="card mb-3" style={{width: 750,  height: 600}}>
            <img src={place.bg} alt="" style={{width: 750,  height: 350}}/>
            <div class="card-body">
              <h5 class="card-title">{place.name}</h5>
              <p class="card-text">{place.details}</p>
            </div>
          </div>
          {/*********************************** Card For Location Details End  *********************************************/}  

          {/*********************************** Tour Details Start  ********************************************************/}
          <div id="booking">
            <h4>Travel Info</h4>
              {/******************************* Origin Start **************************************************************/}
              <FormControl className={classes.formControl} style={{width: 600}} required>
                <InputLabel id="demo-simple-select-label">Origin</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={origin} onChange={handleOrigin} >
                    <MenuItem value={1}>Dhaka</MenuItem>
                    <MenuItem value={2}>Chittagong</MenuItem>
                    <MenuItem value={3}>Sylhet</MenuItem>
                    <MenuItem value={4}>Rajsahi</MenuItem>
                    <MenuItem value={5}>Barishal</MenuItem>
                    <MenuItem value={6}>Khulna</MenuItem>
                  </Select>
              </FormControl> 
              {/******************************* Origin Start **************************************************************/}

              <br/>
              {/******************************* Destination Start *********************************************************/}
              <FormControl className={classes.formControl} style={{width: 600}} required>
                <InputLabel id="demo-simple-select-label">Destination</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={destination} onChange={handleDestination} >
                    <MenuItem value={place.id}>{place.name}</MenuItem>
                  </Select>
              </FormControl> 
              {/******************************* Destination End ************************************************************/}
              <br/>
              
              <Form.Row controlId="dob" style={{marginLeft:70, marginTop:20,marginBottom:20}}>
                <Form.Control type="date" name="dob" style={{width: 250}} placeholder="Date of Birth" required/>
                <h6 style={{marginLeft:40, marginRight:40, marginTop:10}}>To</h6>
                <Form.Control type="date" name="dob" style={{width: 250}} placeholder="Date of Birth" required />             
              </Form.Row>
              <Link to={"/hotel/"+placeId} > <Button variant="info" style={{width: 600}}>Start Booking</Button> </Link> 
            </div>
            {/*********************************** Tour Details End  ********************************************************/}
        </div>
    );
};

export default Booking;