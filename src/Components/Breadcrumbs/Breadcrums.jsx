import React from 'react';
import arrow_icon from "../Assets/breadcrum_arrow.png";
import "./Breadcrumb.css";
import { Container } from 'react-bootstrap';



export const Breadcrums = (props) => {
      const {product} = props;
    return (
      <Container>
        <div className='breadcrum my-5'>
          Home <img src={arrow_icon} alt="" /> Shop   <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" />{product.name}
        </div>
      </Container>
    )
}

