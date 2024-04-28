import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item my-2'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" className='img-fluid mb-2' /></Link>
        <p className='small fw-bold'>{props.name}</p>
        <div className='items-prices d-flex justify-content-between'>
            <div className="item-price-new small fw-bold ">
              ${props.new_price}
            </div> 
            <div className="item-price-old small text-danger text-decoration-line-through">
              ${props.old_price}
            </div>
        </div>    
    </div>
  )
}
