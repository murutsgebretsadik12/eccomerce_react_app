import React from 'react'
import '../../styles/carousel.css';
import {carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import {images} from '../../utility/data'

function Carousel() {
  return (
    <div className="carousel__container">
         <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        interval={3000}
      >
     {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
    ))}

      
      </Carousel>
      <div className='hero__img'></div>

    </div>
  )
}

export default Carousel
