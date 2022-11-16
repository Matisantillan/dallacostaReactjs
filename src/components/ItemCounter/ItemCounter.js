import React from 'react'
import { useState } from 'react';

const ItemCounter = () => {

    const [counter, setCounter] = useState(1);
  const handlerCounterUp = () => {
    setCounter(counter + 1);
  };
  const handlerCounterDown = (event) => {
      if(counter===0){
        event.preventDefault()
      } else{
        setCounter(counter - 1);
      }
   
    
  };

  
  const addToCart = () => {
    
    console.log("Se agregó " +counter+ " del producto al carrito")
  }

  


  return (
    <div id="contadorPadre">
            <div id="contadorHijo" className="Counter">
              <p>Cantidad: {counter}</p>
                <div className="d-grid gap-2 d-md-block">
                  <button
                      className="btn btn-success"
                      type="button"
                      onClick={handlerCounterUp}
                  >
                      +
                  </button>
                  <button
                      className="btn btn-danger"
                      type="button"
                      onClick={handlerCounterDown}
                  >
                      -
                  </button>
                </div>
                <div className="d-grid  d-md-flex justify-content-md-center">
                  <button
                      className="btn btn-secondary me-md-3"
                      type="button"
                      onClick={addToCart}
                  >   
                      Agregar al Carrito
                  </button>
                  
                </div>
              </div>
              
            </div>
  )
}
export default ItemCounter