import { useState,useEffect } from "react";
import Item from "../Item/Item";
import { useParams, Link } from "react-router-dom";
import "../ItemList/ItemList.css"



const ItemList = () => {
    const [productList, setProductList] = useState ([])
    const {categoryName} = useParams()
    

    const getProducts = () => {
        if (categoryName){
            const filteredProduct = productList.filter((producto) => {
                return producto.category === categoryName
            });console.log("entro al if")
            
        }else {}
    }

    useEffect (() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductList(json));
            
    }, []);
    return <>
    {productList.map((product) => (
        <Link to={`/detail/${product.id}`} className="Links" key={product.id} producto={product}>
            <Item key={product.id} producto={product} />
        </Link>
        
    ))
    }
    
    
    </>
}

export default ItemList

/*<>
{productList.map((product) => (
    <Item key={product.id}producto={product} />
))
}


</>
*/