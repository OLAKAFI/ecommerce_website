import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { Col, Row, Container } from 'react-bootstrap';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Items/Item';




export const ShopCategory = (props) => {

  // calling back all_product using Context
  const {all_product} = useContext(ShopContext);
  return (
    
      <div className='shop-category'>
        {/* banners for each shop category */}
        <img src={props.banner} alt="" className='img-fluid' />
        <Container>
          <div className='mt-4'>
            <p>
              <span>Showing 1 -12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
              Sort by <img src={dropdown_icon} alt="dropdownicon" />
            </div>
          </div>
         
            <Row>
              {all_product.map((item,i)=>{
                // if category in props is equal to category in all_product then return <Item/>
                if (props.category === item.category){
                  return (
                    
                    <Col lg='3'>
                      <Item key={i} id={item.id}  name= {item.name} image={item.image} new_price= {item.new_price} old_price={item.old_price}/>
                    
                    </Col>
                  
                  )
                }
                else{
                  return null;
                }
              })}
            </Row>
            <div className="load-more text-center mt-3 mb-5">
              <button>Explore More</button>
            </div>
        </Container>
      </div>
    
  )
}

