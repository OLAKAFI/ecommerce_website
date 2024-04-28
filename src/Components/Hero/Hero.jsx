import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import { Button, Container } from 'react-bootstrap';

export const Hero = () => {
  return (
    <Container>
        <div className='d-flex flex-columm align-items-center mb-4'>
            <div className="col hero-left me-auto">
                <p className='fw-bold'>NEW ARRIVALS ONLY</p>
                <div className='hand-hand-icon d-flex flex-colum '>
                    <p className='display-2 fw-bold'>new</p>
                    <div className='img-fluid'>
                        <img src={hand_icon} alt="hand icon" style={{height:'80px', width:'80px'}} />
                    </div>
                </div>
                <p className='display-2 fw-bold'>Collections</p>
                <p className='display-2 fw-bold'>for everyone</p>
                <div className="hero-latest-btn mt-2">
                    <Button variant="danger">
                        Latest Collection 
                        <span className='ms-2'><img src={arrow_icon} alt="arrow icon" className='img-fluid'/></span>
                        
                    </Button>
                
                </div>

            </div>
            
            <div className="col hero-right">
                <img src={hero_image} alt="hero" className='img-fluid'/>
            </div>


        </div>
    </Container>
  )
}
