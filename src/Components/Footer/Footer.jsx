import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import { } from 'react-bootstrap';


export const Footer = () => {
  return (
    <div className='footer d-flex flex-column text-center mt-4 bg-light'>
        <div className="footer-logo mt-4 container">
            <div>
                <img src={footer_logo} alt="footer logo" />
            </div>
            <div>
                <p className='fw-bold mt-2'>BIZZY SHOP</p>
            </div>
        </div>
        <div className='mx-auto d-flex mb-4 small fw-bold'>
            <div className=''>Company</div>
            <div className='mx-3'>Products</div>
            <div className='' >Offices</div>
            <div className='mx-3'>About</div>
            <div className=''>Contact</div>
        </div>

        <div className="footer-social-icon ">
            <div className='d-flex justify-content-center container'>
                <div className="footer-icons-container ">
                    <img src={instagram_icon} alt="instagram icon" />
                </div>
                <div className="footer-icons-container mx-4">
                    <img src={pintester_icon} alt="instagram icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="instagram icon" />
                </div>
            </div>

            <div className="container footer-copyright my-4">
                <hr />
                <p className='fs-6 fw-bold text-secondary'>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}
