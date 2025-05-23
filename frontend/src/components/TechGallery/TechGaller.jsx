import React, { useState } from 'react';
import styled from 'styled-components';

const TechGallery = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <GalleryContainer>
      <MainDisplay>
        <MainImage 
          src={images[activeIndex].url} 
          alt={images[activeIndex].alt}
          style={{
            '--hue': images[activeIndex].hue,
            '--glow-opacity': hoveredIndex === null ? 0.3 : 0.1
          }}
        />
        <ImageData>
          <h3>{images[activeIndex].title}</h3>
          <p>{images[activeIndex].description}</p>
          <TechTag>{images[activeIndex].tech}</TechTag>
        </ImageData>
      </MainDisplay>
      
      <ThumbnailGrid>
        {images.map((image, index) => (
          <ThumbnailItem 
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setActiveIndex(index)}
            className={index === activeIndex ? 'active' : ''}
          >
            <ThumbnailImage 
              src={image.url} 
              alt={image.alt}
              style={{ '--hue': image.hue }}
            />
            <ThumbnailOverlay>
              <span>{image.tech}</span>
            </ThumbnailOverlay>
          </ThumbnailItem>
        ))}
      </ThumbnailGrid>
    </GalleryContainer>
  );
};

// Styled Components
const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(15, 15, 20, 0.9);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const MainDisplay = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/9;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
  filter: brightness(1.1) contrast(1.1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      hsla(var(--hue), 80%, 60%, var(--glow-opacity)) 0%,
      hsla(calc(var(--hue) + 30), 80%, 60%, var(--glow-opacity)) 100%
    );
    transition: opacity 0.3s ease;
  }
`;

const ImageData = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  p {
    opacity: 0.9;
    margin-bottom: 1rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const TechTag = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const ThumbnailItem = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    
    img {
      filter: brightness(1.2);
    }
    
    div {
      opacity: 1;
    }
  }
  
  &.active {
    box-shadow: 0 0 0 2px white, 0 0 20px hsla(var(--hue), 80%, 60%, 0.5);
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  filter: brightness(0.9) contrast(1.1);
`;

const ThumbnailOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 0.8rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  span {
    color: white;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export default TechGallery;