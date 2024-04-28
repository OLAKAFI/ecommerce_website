import React from 'react';
import './NewsLetter.css';
import { Container, Button, InputGroup } from 'react-bootstrap';

export const NewsLetter = () => {
  return (
    <Container>
        <div className='news-letter mb-5 row align-items-center justify-content-center text-center rounded  bg-light'>
            <div className=' '>
                <h1 className='display-6 fw-bold'>Get Exclusive Offers On Your Email</h1>
                <p className='small'>Subscribe to our newsletter and stay updated</p>
              
                <InputGroup className='justify-content-center rounded'>
                    <input type="email" className='px-2' placeholder='Your Email ID'/>
                    <Button variant="dark" size="lg"> Subscribe</Button>
                </InputGroup>
               
         
                
            </div>
        </div>
    </Container>
  )
}
