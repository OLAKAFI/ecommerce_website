import React from 'react';
import './RelatedProduct.css';
import data_product from '../Assets/data';
import { Col, Container, Row } from 'react-bootstrap';
import { Item } from '../Items/Item';

export const RelatedProduct = () => {
  return (
    <Container className='relatedproduct mt-5'>
        
        <div className='text-center mt-5 mb-4'> 
            <h1 className='fw-bold'>Related Products</h1>
            <hr className='mx-auto'/>
        </div>
        <Row className='justify-content-center'>
            {data_product.map((item, i) => {
                return (
                    <Col lg='3'>
                        <Item  key= {i} id={item.id} name= {item.name} image={item.image} new_price= {item.new_price} old_price={item.old_price} />                        
                    </Col>
                )
            })}
        </Row>
    </Container>
  )
}
