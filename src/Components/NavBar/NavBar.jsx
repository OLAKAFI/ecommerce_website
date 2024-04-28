import React, { useContext, useState }  from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png'
import {Navbar, Nav, Container, Button, Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


export const NavBar = () => {

    // useState to change the state of the navlink when clicked on
    const [menu, setMenu] = useState('shop');

    // use context to grab getTotalCartItems from ShopContext
    // This is used to display the quantity of item in the cart badge
    const {getTotalCartItems} = useContext(ShopContext);

  return (
   <>
        {/* Navbar Component */}
        <Navbar expand="md" bg="light" data-bs-theme="light" className='align-items-center'>
        <Container>
          <Link to='/' className='text-decoration-none'>
            <Navbar.Brand href="#home" className='fw-bold'>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top "
              /> {' '}
              BIZZY SHOP
            </Navbar.Brand>
          </Link>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mx-auto ">
                    <Nav.Link className='text-decoration-none' href="#shop" onClick={()=>{setMenu('shop')}}> <Link to="/ " style={{textDecoration:'none'}}>Shop</Link>{menu==='shop'?<hr></hr>:<></>}</Nav.Link>
                    <Nav.Link  onClick={()=>{setMenu('women')}}><Link to="/women " style={{textDecoration:'none'}}>Women</Link>{menu==='women'?<hr></hr>:<></>}</Nav.Link>
                    <Nav.Link  onClick={()=>{setMenu('men')}}><Link to="/men " style={{textDecoration:'none'}}>Men</Link>{menu==='men'?<hr></hr>:<></>}</Nav.Link>
                    <Nav.Link  onClick={()=>{setMenu('kids')}}><Link to="/kids " style={{textDecoration:'none'}}>Kids</Link>{menu==='kids'?<hr></hr>:<></>}</Nav.Link>
                </Nav>
                <Link to="/login"><Button variant="outline-secondary" className='me-3'>Login</Button></Link>{' '}
                <Link to="/cart">
                    <div className='position-relative'>
                        <img
                            alt=""
                            src={cart}
                            width="30"
                            height="30"
                            className="d-inline-block align-top "
                        />
                        <Badge bg="danger" className=" position-absolute top-0 start-100 translate-middle rounded-circle cart-count"> {getTotalCartItems()}</Badge> 
                    </div>
                </Link>
            </Navbar.Collapse>
            
        </Container>
      </Navbar>
   
   </>
  )
}


