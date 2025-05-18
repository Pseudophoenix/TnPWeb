import React from 'react';
import ProfileCard from './components/TeamPage/our-team.jsx';
import ProfileComponent from './components/Profile/Profile.jsx';
import Timeline from './components/PastRecruiters/PastRecruiters';
import Header from './includes/Header.jsx';
import StatisticsDashboard from './components/Statistics/StatisticsDashboard.jsx';
import Tail from './includes/Tail.jsx';
import { AuthProvider } from './context/authContext.jsx';
// import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute.jsx';
import Register from './components/Register/register.jsx';
import Form from './components/Form/Form.jsx';
import Home from './components/Home/home.jsx';
import Login from './components/Login/Login.jsx';
import InterviewPrep from './components/InterviewPrepPDF/InterviewPrep.jsx';
import AboutMessage from './components/AboutMessage/AboutMessage.jsx';
import { NavLink } from 'react-router-dom';
import HorizontalImageCards from './components/HorizontalImageCards/HorizontalImageCards.jsx';
import NotFound from './components/404/not-found.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  // const cards = {
  //   cards: [
  //     {
  //       imageSrc: 'https://i.pinimg.com/736x/06/fa/03/06fa03abb0747b71bbb5cd6c49cb64d7.jpg',
  //       title: 'Card Title 1',
  //       description: 'Short description for card 1'
  //     },
  //     {
  //       imageSrc: 'https://i.pinimg.com/736x/2f/00/48/2f0048bebffecff18aa817b1888682a6.jpg',
  //       title: 'Card Title 2',
  //       description: 'Short description for card 2'
  //     },
  //     {
  //       imageSrc: 'https://i.pinimg.com/736x/71/ba/14/71ba14fdb91dfd9187b6eb5b3cf8b00a.jpg',
  //       title: 'Card Title 3',
  //       description: 'Short description for card 3'
  //     },
  //     {
  //       imageSrc: 'https://i.pinimg.com/736x/75/c6/86/75c6868a31e3d9384d577d5c73e1b6f2.jpg',
  //       title: 'Card Title 4',
  //       description: 'Short description for card 4'
  //     },
  //     {
  //       imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
  //       title: 'Card Title 5',
  //       description: 'Short description for card 5'
  //     },
  //     {
  //       imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
  //       title: 'Card Title 5',
  //       description: 'Short description for card 5'
  //     },
  //     {
  //       imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
  //       title: 'Card Title 5',
  //       description: 'Short description for card 5'
  //     },
  //     {
  //       imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
  //       title: 'Card Title 5',
  //       description: 'Short description for card 5'
  //     },
  //     {
  //       imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
  //       title: 'Card Title 5',
  //       description: 'Short description for card 5'
  //     },
  //     {
  //       imageSrc: 'https://i.pinimg.com/736x/df/f0/db/dff0db775f5dcfb1ea084c7b4d50bfe7.jpg',
  //       title: 'Card Title 5',
  //       description: 'Short description for card 5'
  //     }
  //   ]
  // }
  return (
    <>
    {/* bg-gradient-to-r to-[#d1d7e3] from-[#f5f7fa] */}
      <div className="min-h-screen ">
        <div className="pt-[120px]">
          <AuthProvider>
            <BrowserRouter>
              <Header></Header>
              {/* <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/form">Form</NavLink>
          </nav> */}


              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recruitment-procedure" element={<Timeline />} />
                <Route path="/director's-message" element={<AboutMessage ></AboutMessage>} />
                <Route path="/form" element={<PrivateRoute>
                  <Form />
                </PrivateRoute>} />
                <Route path="/student-login" element={<Login />} />
                <Route path="/statistics" element={<StatisticsDashboard title={"Placement Statistics"}/>} />
                <Route path="/student-signup" element={<Register />} />
                <Route path="/download-brochure" element={<InterviewPrep title={"Brochure"}/>} />
                <Route path="/policy" element={<InterviewPrep title={"Policy"}/>} />
                <Route path="/profile" element={<ProfileComponent />} />
                <Route path="/our-team" element={<ProfileCard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            {/* <Login></Login> */}
            {/* <Timeline /> */}
            {/* <Form></Form> */}
            {/* <InterviewPrep pdfSrc={"https://savarkar.org/en/pdfs/hindu-rashtra-darshan-en-v002.pdf"} /> */}
            {/* <AboutMessage ></AboutMessage> */}
            {/* <HorizontalImageCards cards={cards.cards}></HorizontalImageCards> */}
          </AuthProvider>
        </div>
      </div >
      <Tail></Tail>
    </>
  );
}

export default App;