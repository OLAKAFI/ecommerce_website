import React from 'react';
import './DescriptionBox.css';
import { Container } from 'react-bootstrap';

export const DescriptionBox = () => {
  return (
    <>
      <Container className='mt-5'>
        <div className="descriptionbox-navigator d-flex ">
            <div className='descriptionbox-nav fw-bold d-flex align-items-center justify-content-center'>Description</div>
            <div className='descriptionbox-nav fw-bold d-flex align-items-center justify-content-center bg-light'>Reviews (122) </div>
        </div>
        <div className="descriptionbox-descripton pt-3 ps-4 border border-1 ">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illum rerum velit blanditiis odit harum laborum ex obcaecati quo natus!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis illum rerum velit blanditiis odit harum laborum ex obcaecati quo natus!</p>
        </div>
      </Container>
    
    </>
  )
}
