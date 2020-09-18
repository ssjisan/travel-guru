import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import Button from 'react-bootstrap/Button';
import './Cover.css'
import coxsBazar from '../../Image/coxs bazar.jpg';
import sreemangal from '../../Image/sreemangal.jpg';
import sundarban from '../../Image/sundarban.jpg'
import coxsBazarCard from '../../Image/Rectangle 1.png'
import sreemangalCard from '../../Image/Sreemongol.png'
import sundarbanCard from '../../Image/sundorbon.png'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const Cover = () => {
    
  return (
    <div className="carousel">


      {/*********************************************************** Slider Start ******************************************************************/}
      <div>
        <MDBContainer>
          <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1" >
            <MDBCarouselInner>

              {/******************************************************* First Card Start ***********************************************************/}
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img className="d-block w-100" src={coxsBazar} alt="First slide"/>
                </MDBView>
                <MDBCarouselCaption style={{display: "flex", marginLeft: "flex"}}>
                  <Card className="bg-dark text-white" style={{ width: '18rem', height: '28rem'}}>
                    <Card.Img src={coxsBazarCard} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Cox's Bazar</Card.Title>
                    <Link to={"/destination/"+1}> <Button variant="primary" style={{marginTop:300}}>Booking</Button> </Link>
                  </Card.ImgOverlay>
                  </Card>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              {/*********************************************************** First Card End *********************************************************/}


              {/********************************************************* Second Card Start ********************************************************/}
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img className="d-block w-100" src={sreemangal} alt="Second slide" />
                </MDBView>
                <MDBCarouselCaption>
                  <Card className="bg-dark text-white" style={{ width: '18rem', height: '28rem'}}>
                    <Card.Img src={sreemangalCard} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title style={{color: "yellow"}}>Sreemangal</Card.Title>
                    <Link to={"/destination/"+2}> <Button variant="primary" style={{marginTop:300}}>Booking</Button> </Link>
                  </Card.ImgOverlay>
                  </Card>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              {/*********************************************************** Second Card End ********************************************************/}

              
              {/*********************************************************** Thrid Card Start *******************************************************/}
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img className="d-block w-100" src={sundarban} alt="Second slide" />
                </MDBView>
                <MDBCarouselCaption>
                  <Card className="bg-dark text-white" style={{ width: '18rem', height: '28rem'}}>
                    <Card.Img src={sundarbanCard} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Sundarban</Card.Title>
                    <Link to={"/destination/"+3}> <Button variant="primary" style={{marginTop:300}}>Booking</Button> </Link>
                  </Card.ImgOverlay>
                  </Card>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                {/*********************************************************** Thrid Card End *******************************************************/}

              </MDBCarouselInner>
            </MDBCarousel>
            </MDBContainer>
          </div>
          {/*********************************************************** Slider End ******************************************************************/}

          <br/>
          
          {/****************************************************** Card Under Slider Start **********************************************************/}

          <div id="card">
          {/*********************************************************** First Text Card Start *****************************************************/}
            <div className="innerCard">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Cox's Bazar</Card.Title>
                    <Card.Text>
                      If you want to soak your feet in the salt water of the sea, book your hotel to Cox's Bazar with us.
                    </Card.Text>
                    <Link to={"/destination/"+1}> <Button variant="primary">Booking</Button> </Link>
                </Card.Body>
              </Card>
            </div>
          {/*********************************************************** First Text Card End *****************************************************/}  
            
          {/*********************************************************** Second Text Card Start *****************************************************/}  
            <div className="innerCard">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Sreemangal</Card.Title>
                    <Card.Text>
                      What happens if you do not eat tea in the country of tea? Take a tour and book a hotel with us.
                    </Card.Text>
                    <Link to={"/destination/"+2}> <Button variant="primary">Booking</Button> </Link>
                </Card.Body>
              </Card>
            </div>
          {/*********************************************************** Second Text Card End *****************************************************/}  

          {/*********************************************************** Third Text Card Start *****************************************************/}
            <div className="innerCard">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Sundarban</Card.Title>
                    <Card.Text>
                      If you want to see tigers, deer, birds- buy tickets for the Sundarbans now and book a hotel with us.
                    </Card.Text>
                    <Link to={"/destination/"+3}> <Button variant="primary">Booking</Button> </Link>
                </Card.Body>
              </Card>
            </div>
          {/*********************************************************** Third Text Card End *****************************************************/}    
                
    
          </div>
          {/****************************************************** Card Under Slider End **********************************************************/} 
        </div>
    );
};

export default Cover;