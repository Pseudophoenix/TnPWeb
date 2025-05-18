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
            src={imageSrc || "https://storage.googleapis.com/tnpsite/encode_beautiful_day.png"} 
            alt={altText || "Home"} 
            className="home__image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;