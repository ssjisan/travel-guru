import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const ShowHotel = (props) => {
    const {image, details, hotelName,facility,price} = props.hotel;
    console.log(props);
    return (
        <div style={{padding: 5}}>
            <Card style={{width: 600}}>
                <CardActionArea>
                    <CardMedia component="img"  height="100" image={image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"> {hotelName}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> {details} </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> <strong>Facility:</strong> {facility}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p"><strong>Price:</strong> {price}</Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"> Confirm </Button>
                </CardActions>
             </Card>
        </div>
    );
};

export default ShowHotel;