import React from 'react';
import './Tail.scss'; // We'll create this stylesheet next
// Import the specific icons from React Icons
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp, 
  FaTelegram 
} from "react-icons/fa";

const Tail = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="tail-container">
      <div className="tail-content">
        <div className="tail-section about-section">
          <h3>Training & Placement Cell</h3>
          <p>
            Dedicated to bridging the gap between academia and industry, helping students achieve their career aspirations.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>----------Address----------</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>tnp@iiitmanipur.ac.in</span>
            </div>
          </div>
        </div>

        {/* <div className="tail-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#"><i className="fa-solid fa-angle-right"></i> Home</a></li>
            <li><a href="#"><i className="fa-solid fa-angle-right"></i> About Us</a></li>
            <li><a href="#"><i className="fa-solid fa-angle-right"></i> Recruiters</a></li>
            <li><a href="#"><i className="fa-solid fa-angle-right"></i> Placement Statistics</a></li>
            <li><a href="#"><i className="fa-solid fa-angle-right"></i> Student Portal</a></li>
            <li><a href="#"><i className="fa-solid fa-angle-right"></i> Contact Us</a></li>
          </ul>
        </div> */}

        <div className="tail-section resources">
          <h3>Resources</h3>
          <ul>
            <li><a href="#"><i className="fa-solid fa-file-pdf"></i> Placement Brochure</a></li>
            {/* <li><a href="#"><i className="fa-solid fa-book"></i> </a></li> */}
            {/* <li><a href="#"><i className="fa-solid fa-calendar-days"></i> Event Calendar</a></li> */}
            <li><a href="#"><i className="fa-solid fa-chalkboard-user"></i> Placement Policy</a></li>
            {/* <li><a href="#"><i className="fa-solid fa-briefcase"></i> Internship Opportunities</a></li> */}
          </ul>
        </div>

        <div className="tail-section connect">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/iiitmanipur/" aria-label="Facebook" title="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" title="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram" title="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube" title="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="WhatsApp" title="WhatsApp"><FaWhatsapp /></a>
            <a href="#" aria-label="Telegram" title="Telegram"><FaTelegram /></a>
          </div>
          <div className="newsletter">
            <h4>Subscribe to Newsletter</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div className="tail-bottom">
        <p>&copy; {currentYear} Training & Placement Cell. All Rights Reserved.- To be removed</p>
        {/* <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Site Map</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Tail;
