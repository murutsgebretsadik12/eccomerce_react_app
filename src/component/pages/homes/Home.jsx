import React from 'react';
import '../../../styles/home.css';
import { categoryImage } from '../../Category/categoryInfo'; // Ensure the path is correct
import Slider from '../../Slider';
import Category from '../../Category/Category'
import { Link} from "react-router-dom";
import Product from '../../Product/Product';
import ProductCard from '../../Product/ProductCard';


const Home = () => {
  return (
    <div className="home">
      <div className="header-container">
        {/* Slider Component */}
        <Slider />
        <Category/>
        <Product/>
        {/* Categories Section */}
        {/* <div className="home__categoryContainer">
          {categoryImage.map((item, index) => (
            <div key={index} className="home__category">
              <Link className='home__categoryLink'>
                <img
                  src={item.imgLink}
                  alt={item.title}
                  className="home__categoryImage"
                />
                <h2>{item.title}</h2>
                <p>Shop know</p>
              </Link>
  
            </div>
          ))}
        </div> */}
        
        {/* <Prod÷uct/> */}
    

       

        
      </div>
    </div>
  );
};

export default Home;
