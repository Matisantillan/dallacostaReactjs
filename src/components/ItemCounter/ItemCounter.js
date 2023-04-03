import React from 'react'
import { useState } from 'react';

const ItemCounter = ({setCounter}) => {

    
  const handlerCounterUp = () => {
    setCounter((currentValue) => currentValue + 1);
  };
  const handlerCounterDown = (event) => {
    
      setCounter((currentValue) => {
        if(currentValue>1) {
          return currentValue -1
        }else{
          return currentValue
        }
      
      });
  }

  

  return (
    <div id="contadorPadre">
            <div id="contadorHijo" className="Counter">
              
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
                
              </div>
              
            </div>
  )
}

/*
const handlerCounterDown = (event) => {
      if(currentValue===1){
        event.preventDefault()
      } else{
        setCounter((currentValue) => currentValue - 1);
      }
   
    
  };

  
  const addToCart = () => {
    
    console.log("Se agregó " +currentValue+ " del producto al carrito")
  }
  */


export default ItemCounter