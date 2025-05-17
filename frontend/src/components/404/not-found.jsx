import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <h2 className="not-found__subtitle">Oops! Page Not Found</h2>
          <p className="not-found__description">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="not-found__animation">
            <div className="not-found__circle"></div>
            <div className="not-found__circle"></div>
            <div className="not-found__circle"></div>
          </div>
          <Link to="/" className="not-found__button">
            Return Home
          </Link>
        </div>
        <div className="not-found__image-wrapper">
          <div className="not-found__image"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;