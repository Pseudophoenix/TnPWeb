import React from 'react';
import './AboutMessage.scss';

const AboutMessage = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="card-container-about-message">
      <div className="about-message">
            <h2 className="team-profiles__heading">Director Sir's Message</h2>
        <div className="about-message__container">
          <div className="about-message__image-column">
            <div className="about-message__image-wrapper">
              <img 
                src={imageSrc || `https://storage.googleapis.com/tnpsite/Director_IIITSM1975827381552293235_n.jpg`} 
                alt={altText || "About us"} 
                className="about-message__image" 
              />
            </div>
          </div>
          <div className="about-message__content-column">
            {title && <h2 className="about-message__title">{title}</h2>}
            <p className="about-message__description">
              
              {/* {description || "Please provide a description"} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sit ex eligendi blanditiis, debitis veniam vel id assumenda laborum nihil consequatur a et neque nostrum minus ratione? Sapiente hic asperiores itaque assumenda facilis ipsa consequatur pariatur necessitatibus delectus laudantium laboriosam amet nesciunt error possimus doloremque dicta minima adipisci, animi sint totam repudiandae nulla. Voluptatibus animi alias rerum? Numquam ullam, voluptates perspiciatis perferendis tempora enim. Maiores eveniet nobis aspernatur magni, reiciendis alias recusandae voluptates ducimus nihil dolore suscipit itaque dicta nemo cupiditate nesciunt vel. Possimus obcaecati nam blanditiis sequi dignissimos amet in facere voluptates? Optio, cupiditate! Harum doloremque natus tenetur suscipit quo quibusdam officiis odio reiciendis sequi, possimus inventore eveniet id aperiam doloribus? Reiciendis dignissimos provident fuga explicabo obcaecati error eligendi alias commodi aperiam, velit impedit veritatis vero architecto corrupti tempore ipsum enim hic aspernatur beatae veniam inventore fugiat ipsa eum. 
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMessage;
