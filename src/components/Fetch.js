import React from 'react'
import { useState, useEffect } from 'react'


export const Fetch = () => {
    const [productList, setProductList] = useState ([])

    useEffect (() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductList(json));
            
    }, []);
  /* return (
    <div>
        {productList.map((item) => (
            <h3 key={item.id}>{item.title}</h3>
        ))}

    </div>
  )
        */
}
