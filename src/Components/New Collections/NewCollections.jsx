import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import { Item } from '../Items/Item';
import { Col, Container, Row } from 'react-bootstrap';
import '../Popular/Popular.css'

export const NewCollections = () => {
  return (
    <Container>
        <div className='new-collections my-5'>
            <div className='text-center mb-4'>
                <h1 className='fw-bold'>NEW COLLECTIONS</h1>
                <hr className='hr-pop mx-auto'/>
            </div>
            <div className="collections container-fluid">
                    <Row className='justify-content-center'>
                        {
                            new_collection.map((item, i)=>{
                                return (
                                    <Col lg='3'>
                                        <Item  key= {i} id={item.id} name= {item.name} image={item.image} new_price= {item.new_price} old_price={item.old_price} />
                                            
                                    </Col>
                                )
                                
                            })
                        }
                    </Row>
            </div>
        </div>
    </Container>
  )
}
