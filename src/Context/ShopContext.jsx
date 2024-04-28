import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

// create a null context
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {
    // usestate for cartitems using the getdefaultcart fnx above
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    
    // add to cart function
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
    }

    // remove from cart function
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
    }

    // global function for totalcart value
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.new_price * cartItems[Number(item)];
            }
            
        }
        return totalAmount;

    }

    // global function for totalcart count
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }


    // create a context that can be assesed globally using context
    const contextValue = {getTotalCartItems, getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart};

    return(
        <ShopContext.Provider value= {contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;