import React from 'react';
import './Offer.css';
import exclusive_image from '../Assets/exclusive_image.png'
import { Button, Container } from 'react-bootstrap';


export const Offer = () => {
  return (
    <Container>
        <div className='offers d-flex justify-content-between p-5 bg-light my-5'>
            <div className=" offers-left d-flex flex-column my-auto">
                <h1 className='display-3'>Exclusive</h1>
                <h1 className='display-3'>Offers For You</h1>
                <p className='fw-bold'>ONLY ON BEST SELLERS PRODUCTS</p>
                <Button variant="danger col-6" size="lg">Check Now</Button>
                
            </div>
            <div className=" offers-right">
                <img src={exclusive_image} alt="exclusive" className='img-fluid' />
            </div>

        </div>
    </Container>
  )
}
