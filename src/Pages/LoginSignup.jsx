import React from 'react';
import { Col, Button, Form} from 'react-bootstrap';
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  return (
    <div className=''>
      <div className='loginsignup shadow px-4 py-4 border  mx-auto my-5'>
        <p className='fs-4'>Sign Up</p>
        <div>
          <Col className='mb-3'>
            <Form.Control className="rounded-0" size="lg" type="text" placeholder="Your Name" />
          </Col>
          <Col className='mb-3'>
            <Form.Control className="rounded-0" size="lg" type="email" placeholder="Email Address" />
          </Col>
          <Col className='mb-3 '>
            <Form.Control className="rounded-0" size="lg" type="password" placeholder="Password" />
          </Col>
          <div className="d-grid gap-2">
            <Button className='mb-3 rounded-0' variant="danger" size="lg">Continue</Button>
          </div>
          <p className=''>Already have an account? <span><a href="/">Login here</a></span></p>
          <Form>
            <Form.Check
              type='checkbox'
              label='By continuing, I agree to the terms of use and privacy policy'
              id='checkbox'
              className='small text-danger'

            />
          </Form>
        </div>
      </div>
    </div>
  )
}
