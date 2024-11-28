import React from 'react'
import { Link} from "react-router-dom";
import '../../styles/catagoryCard.css';

const CategoryCard = ({data}) => {
  console.log(data); // Example: { title: 'Jewelry', name: 'jewelry', imgLink: 'image-url' }
  
  return (
    <div className='category'>
          <Link to={`/${data?.name}`}>
            <span>
                <h2>{data?.title}</h2>
            </span>
            <img src={data?.imgLink} alt={data?.title} />
            <p>Shop now</p>
        </Link>
    </div>
  )
}

export default CategoryCard