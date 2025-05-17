import React from 'react';
import './home.scss';

const Home = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home__content">
          {title && <h1 className="home__title">{title}</h1>}
          <p className="home__description">
            {description || "IIIT Manipur Message."}
          </p>
          {/* <button className="home__cta">Learn More</button> */}
        </div>
        <div className="home__image-wrapper">
          <img 
            src={imageSrc || "https://i.pinimg.com/736x/24/a0/13/24a01362722eac62358cd3d01ca51203.jpg"} 
            alt={altText || "Home"} 
            className="home__image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;