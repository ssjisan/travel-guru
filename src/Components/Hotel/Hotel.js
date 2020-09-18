import React from 'react';
import './Hotel.css';
import { makeStyles } from '@material-ui/core/styles';
import fakeData from '../../FakeData/Destination';
import room from '../../FakeData/Room'; 
import { useParams } from 'react-router-dom';
import ShowHotel from '../ShowHotel/ShowHotel';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



const Hotel = () => {
const classes = useStyles();
const {placeId}  = useParams();
const hotelData = room.filter(room => room.hotelId == placeId);
const place = fakeData.find (place => place.id == placeId );
console.log(hotelData);


return (

    <div className="hotel-map">
        {/***************************************************** Hotel Data Start ***********************************************/}
        <div>
            {
                hotelData.map(hotel => <ShowHotel hotel={hotel}> </ShowHotel>)
            }
        </div>
        {/***************************************************** Hotel Data End ***********************************************/}
            <div> 
               Map
            </div>
        </div>
    );
};

export default Hotel;