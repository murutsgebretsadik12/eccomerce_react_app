import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { productUrl } from '../../api/endpoint';
import ProductCard from '../Product/ProductCard';
import "../../styles/results.css"

const Results = () => {
    const {categoryName} =useParams()
    const [results, setResults] = useState([]);
    const [isLodding, setisLoding] = useState(false)

    useEffect(()=>{
        axios.get(`${productUrl}/products/category/${categoryName}`)
        .then((res) => {
          setResults(res.data);
          setResults(res.setisLoding)
        })
        .catch((err) => {
          console.log(err);
        });
    },[])

  return (
    <section>
    <h1 style={{ padding: "30px" }}>Results</h1>
    <p style={{ padding: "30px" }}>Category / {categoryName}</p>
    <hr />
    {isLodding ?(<Loder/>) :( <div className="products__container">
      {results?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          renderDesc={false}
          renderAdd={true}
        />
      ))}
    </div>)}
   
  </section>
  )
}

export default Results
