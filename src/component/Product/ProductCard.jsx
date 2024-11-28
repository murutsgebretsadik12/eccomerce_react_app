import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import '../../styles/productCard.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../Dataprovider/DataProvider';
import { Type } from '../../utility/action.type';

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  
  // const { image, title, id, rating, price, description } = product;
  const { image = '', title = '', id = '', rating = {}, price = 0, description = ''} = product || {};
  console.log(product)



  const [state, dispatch] = useContext(DataContext)
  console.log(state)



  const addToCart = () => {
    dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
            image,
            title,
            id,
            rating,
            price,
            description,
        },
    });
};


  return (
    <div className={`card__container ${flex ? 'product__flexed' : ''}`}>
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="product__image"
        />
      </Link>
      <div className="product__details">
        <h3 className="product__title">{title}</h3>
        {renderDesc && <div style={{maxWidth:"500px"}}>{description}</div>}
        {/* {renderDesc && description && (
          <div className="product__description">{description}</div>
        )} */}
        <div className="rating">
          <Rating value={rating.rate || 0} precision={0.1} readOnly />
          
          <small>({rating.count || 0} reviews)</small>
        </div>
        <CurrencyFormat amount={price} />
  
  {renderAdd && <button className="button" onClick={addToCart}>
          Add to cart
        </button>

  }
        
      </div>
    </div>
  );
};

export default ProductCard;
