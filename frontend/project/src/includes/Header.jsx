import React, { useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaUserCircle } from 'react-icons/fa';
import './Header.scss';
import { useState, useRef } from 'react';
import { FaBars, FaTimes, FaChevronDown as FaChevronDownIcon } from 'react-icons/fa';
import { 
  Menu, X, ChevronDown, Phone, Mail, Search,
  Building2, GraduationCap, BarChart, Home,
  Info, Users, BookOpen, MessageSquare
} from 'lucide-react';

const Header = () => {
  const navItems = {
    'About': ['Director\'s Message', 'Our Team', 'Infrastructure'],
    'For Recruiters': ['Why Recruit', 'Recruitment Procedure', 'Download Brochure'],
    'For Students': ['Resources', 'Internships', 'Interview Preparation']
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dropdown menus (for mobile)
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Dynamic classes
  // const headerClass = `header-container ${isNavVisible ? 'expanded' : 'collapsed'}`;
  // const dragButtonClass = isNavVisible ? 'drag-button-open' : 'drag-button-closed';
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
  const SearchBar = () => (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full lg:w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
    </div>
  );
  
  const NavLinks = ({ navItems, activeDropdown, toggleDropdown }) => (
    <>
      <a href="/" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
        <Home size={20} />
        <span>Home</span>
      </a>
      {Object.entries(navItems).map(([title, items]) => (
        <div key={title} className="relative group">
          <button
            className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
            onClick={() => toggleDropdown(title)}
          >
            {title === 'About' && <Info size={20} />}
            {title === 'For Recruiters' && <Building2 size={20} />}
            {title === 'For Students' && <GraduationCap size={20} />}
            <span>{title}</span>
            <ChevronDown size={16} className={`transform transition-transform duration-200 ${activeDropdown === title ? 'rotate-180' : ''}`} />
          </button>
          <div className={`
            absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2
            transform transition-all duration-200 origin-top
            ${activeDropdown === title ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
          `}>
            {items.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-4 py-2 hover:bg-blue-50 text-gray-800 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ))}
      <a href="/statistics" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
        <BarChart size={20} />
        <span>Placement Statistics</span>
      </a>
      <a href="/contact" className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
        <MessageSquare size={20} />
        <span>Contact</span>
      </a>
    </>
  );
  
  const MobileNavLinks = ({ navItems, activeDropdown, toggleDropdown }) => (
    <div className="flex flex-col space-y-4 mt-4">
      <NavLinks 
        navItems={navItems}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
      />
    </div>
  );
  return (
    <div ref={headerRef} className={headerClass}>
      <div className="header-top">
        <div className="header-contact">
          <a href="tel:+919876543210"><span>Call Us:</span> +91 98765 43210</a>
          <a href="mailto:tnp@university.ac.in"><span>Email:</span> tnp@iiitmanipur.ac.in</a>
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
            {/* <div className="bg-blue-900 text-white">
              <div className="container mx-auto px-4 py-2">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm hover:text-blue-200 transition-colors">
                      <Phone size={16} />
                      <span>+1 (234) 567-890</span>
                    </a>
                    <a href="mailto:info@institute.edu" className="flex items-center space-x-2 text-sm hover:text-blue-200 transition-colors">
                      <Mail size={16} />
                      <span>info@institute.edu</span>
                    </a>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-sm hover:text-blue-200 transition-colors">Student Login</button>
                    <button className="text-sm hover:text-blue-200 transition-colors">Recruiter Login</button>
                  </div>
                </div>
              </div>
            </div> */}
      
            {/* Main Header */}
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://iiitmanipur.ac.in/img/iiitm-logo.png"
                    alt="Institute Logo" 
                    className="w-20 h-12 rounded"
                  />
                  <h1 className="text-xl font-bold text-gray-800">Indian Institute of Information Technology Senapati Manipur</h1>
                </div>
      
                {/* Mobile Menu Button */}
                <button 
                  className="lg:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X /> : <Menu />}
                </button>
      
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6">
                  <SearchBar />
                  <NavLinks 
                    navItems={navItems} 
                    activeDropdown={activeDropdown}
                    toggleDropdown={toggleDropdown}
                  />
                </nav>
              </div>
            </div>
      
            {/* Mobile Navigation */}
            <div className={`
              lg:hidden fixed inset-y-0 right-0 transform w-64 bg-white shadow-lg
              transition-transform duration-300 ease-in-out z-50
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
              <div className="p-6">
                <button 
                  className="absolute top-4 right-4"
                  onClick={() => setIsOpen(false)}
                >
                  <X />
                </button>
                <div className="mt-8">
                  <SearchBar />
                  <MobileNavLinks 
                    navItems={navItems}
                    activeDropdown={activeDropdown}
                    toggleDropdown={toggleDropdown}
                  />
                </div>
              </div>
            </div>
    </div>
  );
};

export default Header;
