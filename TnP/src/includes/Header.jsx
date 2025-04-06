import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaUserCircle } from 'react-icons/fa';
import './Header.scss';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const headerRef = useRef(null);
  const dragButtonRef = useRef(null);
  
  // Handle toggle for expanding/collapsing header
  const toggleHeader = () => {
    setIsExpanded(!isExpanded);
    setIsNavVisible(!isNavVisible);
  };
  
  // Effect for scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Draggable functionality
  useEffect(() => {
    const header = headerRef.current;
    const dragButton = dragButtonRef.current;
    let isDragging = false;
    let initialY = 0;
    let currentTop = 0;
    
    const handleDragStart = (e) => {
      isDragging = true;
      initialY = e.clientY || e.touches?.[0].clientY || 0;
      currentTop = parseInt(window.getComputedStyle(header).top) || 0;
      document.body.style.userSelect = 'none';
    };
    
    const handleDrag = (e) => {
      if (!isDragging) return;
      
      const y = e.clientY || e.touches?.[0].clientY || 0;
      const deltaY = y - initialY;
      
      // Limit the dragging range (0 to 80% of viewport height)
      const newTop = Math.max(0, Math.min(window.innerHeight * 0.8, currentTop + deltaY));
      header.style.top = `${newTop}px`;
    };
    
    const handleDragEnd = () => {
      isDragging = false;
      document.body.style.userSelect = '';
      
      // Snap to top or stay where it is based on position
      const currentPosition = parseInt(window.getComputedStyle(header).top) || 0;
      if (currentPosition < 50) {
        header.style.top = '0';
      }
    };
    
    if (dragButton) {
      dragButton.addEventListener('mousedown', handleDragStart);
      dragButton.addEventListener('touchstart', handleDragStart, { passive: true });
      
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('touchmove', handleDrag, { passive: false });
      
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    }
    
    return () => {
      if (dragButton) {
        dragButton.removeEventListener('mousedown', handleDragStart);
        dragButton.removeEventListener('touchstart', handleDragStart);
        
        window.removeEventListener('mousemove', handleDrag);
        window.removeEventListener('touchmove', handleDrag);
        
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('touchend', handleDragEnd);
      }
    };
  }, []);
  
  // Responsive design - detect orientation
  useEffect(() => {
    const handleOrientationChange = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      document.documentElement.classList.toggle('portrait-mode', isPortrait);
    };
    
    // Initial check
    handleOrientationChange();
    
    // Listen for orientation changes
    window.addEventListener('resize', handleOrientationChange);
    return () => window.removeEventListener('resize', handleOrientationChange);
  }, []);
  
  const headerClass = `header-container ${isCollapsed ? 'collapsed' : ''} ${isExpanded ? 'expanded' : ''} ${isNavVisible ? 'nav-visible' : ''}`;
  const dragButtonClass = isNavVisible ? 'drag-button-open' : 'drag-button-closed';
  
  return (
    <header ref={headerRef} className={headerClass}>
      <div className="header-top">
        <div className="header-contact">
          <a href="tel:+919876543210"><span>Call Us:</span> +91 98765 43210</a>
          <a href="mailto:tnp@university.ac.in"><span>Email:</span> tnp@university.ac.in</a>
        </div>
        <div className="header-actions">
          <a href="/student-login" className="login-btn">
            <FaUserCircle /> Student Login
          </a>
          <a href="/recruiter-login" className="login-btn recruiter">
            <FaUserCircle /> Recruiter Portal
          </a>
        </div>
      </div>
      
      <div className="header-main">
        <div className="logo">
          <a href="/">
            <img src="/logo.png" alt="T&P Cell" />
            <div className="logo-text">
              <h1>Training & Placement Cell</h1>
              <p>University Name</p>
            </div>
          </a>
        </div>
      </div>
      
      <div className="nav-fold-container">
        <div className="navigation-container">
          <nav className="main-navigation">
            <ul>
              <li><a href="/">Home</a></li>
              <li className="has-dropdown">
                <a href="/about">About</a>
                <ul className="dropdown-menu">
                  <li><a href="/about/message">Director's Message</a></li>
                  <li><a href="/about/team">Our Team</a></li>
                  <li><a href="/about/facilities">Infrastructure</a></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="/recruiters">For Recruiters</a>
                <ul className="dropdown-menu">
                  <li><a href="/recruiters/why-recruit">Why Recruit</a></li>
                  <li><a href="/recruiters/procedure">Recruitment Procedure</a></li>
                  <li><a href="/recruiters/brochure">Download Brochure</a></li>
                </ul>
              </li>
              <li className="has-dropdown">
                <a href="/students">For Students</a>
                <ul className="dropdown-menu">
                  <li><a href="/students/resources">Resources</a></li>
                  <li><a href="/students/internships">Internships</a></li>
                  <li><a href="/students/preparation">Interview Preparation</a></li>
                </ul>
              </li>
              <li><a href="/statistics">Placement Statistics</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          
          <div className="header-search">
            <form>
              <input type="text" placeholder="Search..." />
              <button type="submit"><FaSearch /></button>
            </form>
          </div>
        </div>
      </div>
      <div className={dragButtonClass} ref={dragButtonRef} onClick={toggleHeader}>
        {isNavVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>
    </header>
  );
};

export default Header;
