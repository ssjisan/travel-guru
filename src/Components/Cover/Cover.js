import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Button from 'react-bootstrap/Button';
import './Cover.css'

const Cover = () => {
    
    return (
        <div>
           <MDBContainer>
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1" >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img className="d-block w-100" style={{width:100}} src="https://external-preview.redd.it/J2poU3SeyemprBqG97c5VcAf5BuDwADYuGbs2d3H6AI.jpg?auto=webp&s=73b4d0e2b6cbd2dd56c485df82a6ec50e55f3fcd" alt="First slide"/>
                                <MDBMask overlay="black-light" />
                                </MDBView>
                                <MDBCarouselCaption>
                                  <div style={{color: "black"}}>
                                  <h3>Cox's Bazar</h3>
                                  <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                                <Button variant="warning">Booking</Button>
                                  </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                           
                           
                            {/* Item One End */}
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img className="d-block w-100" src="https://images8.alphacoders.com/485/thumb-1920-485178.jpg" alt="Second slide" />
                                      <MDBMask overlay="black-strong" />
                                </MDBView>
                                <MDBCarouselCaption>
                                <div style={{color: "black"}}>
                                  <h3>Cox's Bazar</h3>
                                  <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                                  <Button variant="info">Booking</Button>
                                  </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
                            {/* Item Two End */}

                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img className="d-block w-100" src="https://c1.wallpaperflare.com/preview/148/416/972/deer-sundarban-bangladesh.jpg" alt="Second slide" />
                                      <MDBMask overlay="black-strong" />
                                </MDBView>
                                <MDBCarouselCaption>
                                <div style={{color: "black"}}>
                                  <h3>Cox's Bazar</h3>
                                  <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                                  <Button variant="success">Booking</Button>
                                  </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
        </div>
    );
};

export default Cover;