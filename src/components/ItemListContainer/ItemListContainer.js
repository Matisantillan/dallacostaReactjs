import { useState,useEffect } from "react";
import "../ItemListContainer/style.css"
import ItemList from "../ItemList/ItemList";




const ItemListContainer = () => {
    
    return (
        
            <ItemList />
        
    
    )
}

export default ItemListContainer


/*
const ItemListContainer = () => {
    const [productList, setProductList] = useState ([])

    useEffect (() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductList(json));
            
    }, []);
    return <div><ItemList productList={productList}/></div>
}
*/