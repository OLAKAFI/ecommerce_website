import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Container, Col, Row, InputGroup, Button, Form } from 'react-bootstrap';



export const CartItem = () => {
    // using context to grab getTotalCartAmount, all_product, cartItems, removeFromCart from ShopContext
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (

    // displays list of items in cart including their quantity, description, price, etc
    <Container className='mt-4'>
        <div className='cartitems'>
            <Row className="fw-bold d-flex align-items-center justify-content-between cartitems-format-main">
                <Col lg={1}>Product</Col>
                <Col lg={3}>Tittle</Col>
                <Col lg={1}>Price</Col>
                <Col lg={2}>Quantity</Col>
                <Col lg={1}>Total</Col>
                <Col lg={1}>Remove</Col>
                {/* <Col lg={1}>Add</Col> */}
            </Row>
            
            
            <hr />
            {/* function to display cartitem if the number of cartitem > 0 */}
            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return (
                        <Row className="cartitems-format d-flex align-items-center justify-content-between ">
                            <Col lg={1}><img src={e.image} className='carticon-product-icon img-fluid ' alt="" /></Col>
                            <Col lg={3}>{e.name}</Col>
                            <Col lg={1}>${e.new_price}</Col>
                            <Col lg={2}><button className='cartitems-quantity'>{cartItems[e.id]}</button></Col>
                            <Col lg={1}>${e.new_price * cartItems[e.id]}</Col>
                            <Col lg={1}><img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" /></Col>
                            {/* <Col lg={1}><img src={remove_icon} onClick={()=>{addToCart(e.id)}} alt="" /></Col> */}
                            
                            <hr className='mt-3'/>
                        </Row>
                    )      
                }
                return null;
            })}

            <Row className="cartitems-down d-flex justify-content-between mt-5">
                <Col lg={6} className="cartitems-total">
                    <h1 className='fw-bold mb-3'>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item d-flex justify-content-between">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item d-flex justify-content-between">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items d-flex justify-content-between">
                            <p className='fw-bold'>Total</p>
                            <p className='fw-bold'>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button className='btn btn-lg btn-danger'> PROCEED TO CHECKOUT</button>
                </Col>
                <Col lg={4} className="caritems-promocode">
                    <p>If you have promo code, Enter it here</p>
                    <InputGroup className="mb-3 ">
                        <Form.Control
                        placeholder="Promo code"
                        aria-label="Promo code"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="text-white btn-dark" id="button-addon2">
                            Submit
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    </Container>
  )
}
