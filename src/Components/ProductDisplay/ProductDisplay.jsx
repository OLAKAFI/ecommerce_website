import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Row, Col, Container, Stack } from 'react-bootstrap';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (

    <Container>
      <Row>
        <Col className=''>
            <Row className=''>
                <Col lg='3' className=' d-flex justify-content-between'>
                    <Stack gap={5} className=''>
                        <div>
                            <img src={product.image} alt="" className='img-fluid '/>
                        </div>
                        <div>
                            <img src={product.image} alt="" className='img-fluid'/>
                        </div>
                        <div>
                            <img src={product.image} alt="" className='img-fluid'/>
                        </div>   
                    </Stack>
                </Col>
                <Col  className='border'> 
                    <div className='border'>
                        <img src={product.image} alt="" className='right-image' />   
                    </div>
                </Col>
            </Row>
        
        </Col>

        <Col>
            <div className="productdisplay-right">
                <h1 className='fs-3'>{product.name}</h1>
                <Row className='  productdisplay-right-star w-auto'>
                    <Col lg={3} className='  '>
                        <img src={star_icon} alt=""  className='img-fluid'/>
                        <img src={star_icon} alt="" className='img-fluid'/>
                        <img src={star_icon} alt="" className='img-fluid'/>
                        <img src={star_icon} alt="" className='img-fluid'/>
                        <img src={star_dull_icon} alt="" className='img-fluid ' />
                    </Col>
                    <Col lg={1} className=''>
                        <p className=''>(122)</p>
                    </Col>  
                </Row>
            </div> 
            <div className="productdisplay-right-prices flex d-flex gap-3 mt-2">
                <div className="fw-bold fs-5 text-danger text-decoration-line-through">${product.old_price}</div>
                <div className="fw-bold fs-5">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error cum fugit. Necessitatibus numquam dolorem, quidem consequuntur atque tempora mollitia? Voluptate in repellendus voluptatibus rem incidunt assumenda vel cupiditate facilis.
            </div>
            <div className="productdisplay-right-sizes mt-5">
                <h1 className='fs-4'>Select Size</h1>
                <div className="productdisplay-right-size flex d-flex gap-4">
                    <div >S</div>
                    <div >M</div>
                    <div >L</div>
                    <div >XL</div>
                    <div >XXL</div>
                </div>
                <button className='mt-4 border-0' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            </div>
        </Col>
            
        
        </Row>
    </Container>
     
  )
}
