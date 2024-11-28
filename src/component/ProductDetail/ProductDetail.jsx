import React, { useState, useEffect } from 'react'
import '../../styles/ProductDetail.css'
import {useParams} from 'react-router-dom'
import axios from 'axios';

import {productUrl} from '../../api/endpoint'
import ProductCard from '../Product/ProductCard'
import Loder from '../Loder/Loder';

const ProductDetail = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({});
    const [isLodding, setisLoding] = useState(false)


    useEffect(()=>{
        setisLoding(true)
        axios.get(`${productUrl}/products/${productId}`)
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data);
            setisLoding(false)
        })
        .catch((err) => console.error(err));
      
    },[productId]);
   
  return (
    <div>
        {isLodding ? <Loder/> : <ProductCard product={product} flex = {true} renderDesc={true} renderAdd={true}/>}

      
     
        {/* <h1>ProductDetail</h1>
        <h1>{product?.title || 'Product Title'}</h1>
        <img src={product?.image} alt={product?.title || 'Product Image'} />
        <p>{product?.description || 'product description is not available'}</p>
        <h2>${product?.price ||'0.00'}</h2> */}
    </div>
  )
}

export default ProductDetail