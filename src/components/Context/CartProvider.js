import React from 'react'
import { createContext, useState } from 'react'

export const cartContext = createContext([]);


const CartProvider = ({children}) => {
    const {cart, setCart} = useState([])

    const addToCart = (product, cantidad) => {
        setCart([...cart, {product, cantidad}]);
    };


  return (
    <cartContext.Provider value={{cart, addToCart}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider