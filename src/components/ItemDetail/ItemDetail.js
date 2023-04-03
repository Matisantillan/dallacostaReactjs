import React from 'react'
import { useState, useContext } from 'react';
import { cartContext } from '../Context/CartProvider';
import ItemCounter from '../ItemCounter/ItemCounter';



const ItemDetail = ({producto}) => {
  const [counter, setCounter] = useState(1);
  
  const {cart, addToCart}= useContext(cartContext)
  
  return (
    <div className="card mb-3 bg-light" >
      
          <div className="row g-0">
          <div className="col-md-4">
          <img src={producto.image} className="img-fluid rounded-start TamañoImg" alt="..." />
          </div>
          <div className="col-md-8">
          <div className="card-body">
            
          <h5 className="card-title">{producto.title}</h5>
          <p className="card-text">ID: {producto.id}</p>
          <p className="card-text">Description: {producto.description}</p>
          <p className="card-text">Category: {producto.category}</p>
          <p className="card-text">Price: US${producto.price}</p>
          
          
          
          </div>
          <p>Cantidad: {counter}</p>
            <ItemCounter setCounter={setCounter}/>
            
            <div className="d-grid  d-md-flex justify-content-md-center">
                  <button 
                      className="btn btn-secondary me-md-3"
                      type="button" onClick={() => addToCart(producto, counter)}>Agregar al Carrito</button>
                  
                </div>
                

          </div>
          
          </div>
          
          </div>
  )
  
}
export default ItemDetail