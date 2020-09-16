import React from 'react';
import './Booking.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from 'react-bootstrap/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';


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
    const classes = useStyles();
    const [origin, setOrigin] = React.useState('');
  const handleOrigin = (event) => {
    setOrigin(event.target.value);
    setDestination(event.target.value);
  };

  const [destination, setDestination] = React.useState('');
  const handleDestination = (event) => {
    setDestination(event.target.value);
  };


    return (
        <div id="bookingContainer">
            <div id="info">
            <h3>Cox's Bazar</h3>
                                  <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.With Muslim Aid and YPSA as partners in Ukhiya and Kutubdia district respectively, we will continue to build capacity of teachers and teacher trainers. Our work to establish an enabling, vibrant reading environment and to promote a reading habit among children will pace up as we graduate from the first year of the project. We are banking on the learnings from year one and looking forward to 2019 with renewed energy and firm commitment toward equitable and quality education for all.</p>
            </div>
            <div id="booking">
              <h4>Travel Info</h4>
            <FormControl className={classes.formControl} style={{width: 600}}>
                    <InputLabel id="demo-simple-select-label">Origin</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={origin} onChange={handleOrigin} >
                            <MenuItem value={1}>Dhaka</MenuItem>
                            <MenuItem value={2}>Chittagong</MenuItem>
                            <MenuItem value={3}>Sylhet</MenuItem>
                            <MenuItem value={4}>Rajsahi</MenuItem>
                            <MenuItem value={5}>Barishal</MenuItem>
                            <MenuItem value={6}>Khulna</MenuItem>
                        </Select>
            </FormControl> <br/>
            <FormControl className={classes.formControl} style={{width: 600}}>
                    <InputLabel id="demo-simple-select-label">Destination</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={destination} onChange={handleDestination} >
                            <MenuItem value={7}>Cox'z Bazar</MenuItem>
                            <MenuItem value={8}>Sreemangal</MenuItem>
                            <MenuItem value={9}>Sundarban</MenuItem>
                        </Select>
            </FormControl> <br/>
              <Link to="/hotel"> <Button variant="info" style={{width: 600}}>Start Booking</Button> </Link> 
            </div>
        </div>
    );
};

export default Booking;