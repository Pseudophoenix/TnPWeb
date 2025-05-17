import React from 'react';
import './HorizontalImageCards.scss';

const HorizontalImageCards = ({ cards }) => {
  
  return (
    <div className="card-container-horizontal-cards">
      <div className="horizontal-cards">
        <div className="horizontal-cards__scroll-container">
          {cards.map((card, index) => (
            <div className="horizontal-cards__card" key={index}>
              <div className="horizontal-cards__image-container">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="horizontal-cards__image"
                />
                <div className="horizontal-cards__overlay">
                  <h3 className="horizontal-cards__title">{card.title}</h3>
                  <p className="horizontal-cards__description">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HorizontalImageCards;
