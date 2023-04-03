import { useState,useEffect } from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productList, setProductList] = useState ([])
    let {id} = useParams()
    

    
    useEffect (() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProductList(json));
            
    }, [id]);
   
    return <ItemDetail key={productList.id} producto={productList} />
   
        
    
    
    
    
    
        
    
    
}
export default ItemDetailContainer


/*

    */
