// DemoCarousel.js

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import { Carousel } from 'react-responsive-carousel';
import firstImage from './image1.webp'; //
import SImage from './image2.webp';
import thirdImage from './image3.webp';
import fourImage from './image4.webp';
import fiveImage from './image5.webp';

const DemoCarousel = () => {
  return (
    <Carousel infiniteLoop={true} showArrows={false} autoPlay={true} showThumbs={false}>
      <div>
        <img src={firstImage} alt="Image 1" />
        <p className="legend">Product list 1</p>
      </div>
      <div>
        <img src={SImage} alt="Image 2" />
        <p className="legend">Product list 2</p>
      </div>
      <div>
        <img src={thirdImage} alt="Image 3"  />
        <p className="legend">Product list 3</p>
      </div>
      <div>
        <img src={fourImage} alt="Image 3"  />
        <p className="legend">Product list 4</p>
      </div>
      <div>
        <img src={fiveImage} alt="Image 3"  />
        <p className="legend">Product list 4</p>
      </div>
    </Carousel>
  );
};

export default DemoCarousel; // Exporting the functional component
