import React from 'react'
import {categoryImage} from './categoryInfo'
import CategoryCard from './CategoryCard'
import '../../styles/catagoryCard.css';

const Category = () => {
  return (
    <div className="category__container">
      {categoryImage.map((info, index)=>(
        <CategoryCard key={index} data={info}/>
        ))}
    </div>
  )
}

export default Category