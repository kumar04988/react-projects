
import React from 'react';
import './images.scss';
import imageOwl from '../../owlNavbar/image/pexels-erik-karits-9788670.jpg'

function ImageAnimation() {
  return (
    <div>

    <div className="fade-in-out">
      <img src={imageOwl} alt="Image" />
    </div>

    <div className="zoom-in-out">
      <img src={imageOwl} alt="Image" />
    </div>

    <div className="slide-in-out">
      <img src={imageOwl} alt="Image" />
    </div>


    <div className="three-d-image">
      <div className="image-container">
        <img src={imageOwl} alt="Image" />
      </div>
    </div>






    </div>
  );
}

export default ImageAnimation;
;