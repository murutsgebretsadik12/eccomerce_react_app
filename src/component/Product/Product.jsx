import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import '../../styles/productCard.css';
import Loder from '../Loder/Loder';


const Product = () => {
    const [products, setProducts] = useState([]); // Initialize as an empty array
    const [isLodding, setIsLoding] = useState(false)

    useEffect(()=>{
       axios.get("https://fakestoreapi.com/products")
       .then((res) =>{
        // console.log(res)
        setProducts(res.data)
     
        setIsLoding(false); // Loading complete
        
       })
       .catch((error) => {
        console.error(error)
        setIsLoding(true)
       });
    },[])
  
  
  return (
    <div>
  {isLodding ? (<Loder/>) :(<section style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center"}} >
        {products.map((product) => (
            
          <ProductCard key={product.id} product={product}  renderAdd={true}/> // Pass the product as a prop
        ))}
      </section>) }
        
    </div>
  )
}

export default Product
