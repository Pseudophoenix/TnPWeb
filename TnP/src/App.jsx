import { useState } from 'react';
import './App.scss';
import Form from './Form.jsx';
import Header from './includes/Header.jsx';
import Tail from './includes/Tail.jsx';
import Login from './components/Login/Login.jsx';
import AboutMessage from './components/AboutMessage/AboutMessage.jsx';
import InterviewPrep from './components/InterviewPrepPDF/InterviewPrep.jsx';
import HorizontalImageCards from './components/HorizontalImageCards/HorizontalImageCards.jsx';
// import { cards } from './components/HorizontalImageCards/HorizontalImageCardsData.jsx';
import { useEffect } from 'react';
// import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// import { AuthContext } from './context/AuthContext.jsx';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useReducer } from 'react';
import { useRef } from 'react';
import Timeline from './components/PastRecruiters/pastRecruiters.jsx';
// import { useState } from 'react';


function App() {

  // Default props
  const cards= {
    cards: [
      {
        imageSrc: 'https://i.pinimg.com/736x/06/fa/03/06fa03abb0747b71bbb5cd6c49cb64d7.jpg',
        title: 'Card Title 1',
        description: 'Short description for card 1'
      },
      {
        imageSrc: 'https://i.pinimg.com/736x/2f/00/48/2f0048bebffecff18aa817b1888682a6.jpg',
        title: 'Card Title 2',
        description: 'Short description for card 2'
      },
      {
        imageSrc: 'https://i.pinimg.com/736x/71/ba/14/71ba14fdb91dfd9187b6eb5b3cf8b00a.jpg',
        title: 'Card Title 3',
        description: 'Short description for card 3'
      },
      {
        imageSrc: 'https://i.pinimg.com/736x/75/c6/86/75c6868a31e3d9384d577d5c73e1b6f2.jpg',
        title: 'Card Title 4',
        description: 'Short description for card 4'
      },
      {
        imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
        title: 'Card Title 5',
        description: 'Short description for card 5'
      },
      {
        imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
        title: 'Card Title 5',
        description: 'Short description for card 5'
      },
      {
        imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
        title: 'Card Title 5',
        description: 'Short description for card 5'
      },
      {
        imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
        title: 'Card Title 5',
        description: 'Short description for card 5'
      },
      {
        imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
        title: 'Card Title 5',
        description: 'Short description for card 5'
      },
      {
        imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
        title: 'Card Title 5',
        description: 'Short description for card 5'
      }
    ]
  }


  return (
    <>
      <Header></Header>
      <Form></Form>
      <Login></Login>
      <AboutMessage></AboutMessage>
      <InterviewPrep pdfSrc={"https://savarkar.org/en/pdfs/hindu-rashtra-darshan-en-v002.pdf"}></InterviewPrep>
      <HorizontalImageCards cards={cards.cards}></HorizontalImageCards>
      <Timeline></Timeline>
      <Tail></Tail>
    </>
  );
}

export default App;
