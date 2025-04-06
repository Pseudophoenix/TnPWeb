import React from 'react';
import './HorizontalImageCards.scss';

const HorizontalImageCards = ({ cards }) => {
  return (
    <div className="card-container">
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

// Default props
HorizontalImageCards.defaultProps = {
  cards: [
    {
      imageSrc: 'https://via.placeholder.com/300x400',
      title: 'Card Title 1',
      description: 'Short description for card 1'
    },
    {
      imageSrc: 'https://via.placeholder.com/300x400',
      title: 'Card Title 2',
      description: 'Short description for card 2'
    },
    {
      imageSrc: 'https://via.placeholder.com/300x400',
      title: 'Card Title 3',
      description: 'Short description for card 3'
    },
    {
      imageSrc: 'https://via.placeholder.com/300x400',
      title: 'Card Title 4',
      description: 'Short description for card 4'
    },
    {
      imageSrc: 'https://via.placeholder.com/300x400',
      title: 'Card Title 5',
      description: 'Short description for card 5'
    }
  ]
};

export default HorizontalImageCards;
