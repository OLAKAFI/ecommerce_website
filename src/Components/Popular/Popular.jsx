import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import { Item } from '../Items/Item';
import { Col, Container, Row } from 'react-bootstrap';

export const Popular = () => {
  return (
    <>
        <Container>
            <div className='popular '>
                <div className='text-center mb-5'>
                    <h1 className=''>POPULAR IN WOMEN</h1>
                    <hr className='hr-pop mx-auto'/>
                </div>
                <div className="container-fluid">
                    <Row className='justify-content-center'>
                        {
                            data_product.map((item,i)=>{
                                return(
                                    <Col lg='3'>
                                        <Item  key={i} id={item.id} name= {item.name} image={item.image} new_price= {item.new_price} old_price={item.old_price} />
                                    
                                    </Col>
                                )
                            })
                        };

                    </Row>
                    
                </div>

            </div>
        </Container>
    </>
  )
}
