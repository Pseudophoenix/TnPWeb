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
            <strong>Welcome to IIIT Senapati, Manipur</strong><br /><br />

            The Indian Institute of Information Technology (IIIT) Senapati, Manipur, established in 2015 under the Public-Private Partnership (PPP) model, is an Institute of National Importance under the Ministry of Education, Government of India.<br /><br />

            <strong>Core Disciplines:</strong><br />
            • Computer Science and Engineering (CSE)<br />
            • Electronics and Communication Engineering (ECE)<br /><br />

            With seven batches graduated and the eighth ready for placements, our alumni have earned accolades in top industries and prestigious academic institutions worldwide.<br /><br />

            Our curriculum blends technical depth with real-world application, including a full-semester internship in the final year. Students gain hands-on experience in areas such as:<br />
            • Artificial Intelligence (AI)<br />
            • Machine Learning (ML)<br />
            • Data Analytics<br />
            • Blockchain<br />
            • Internet of Things (IoT)<br />
            • Embedded Systems<br />
            • VLSI Design<br /><br />

            Modern infrastructure, small class sizes, and strong mentorship foster holistic development. At IIIT Senapati, we empower students to think critically, innovate boldly, and lead with purpose.<br /><br />

            We warmly invite organizations to explore the talent and potential of our students during campus placements.<br /><br />

            <em>Prof. Krishnan BASKAR<br />
            Director, IIIT Senapati, Manipur</em>
          </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMessage;