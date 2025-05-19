import React from 'react';
import './our-team.scss';

const TeamProfiles = () => {
  // Sample data - replace with your actual data
  const teamData = {
    leader: {
      id: 1,
      name: 'Dr Navanath Saharia',
      position: 'TPO',
      image: '',
      description: 'Visionary leader with 10+ years of experience in strategic development.'
    },
    subLeaders: [
      {
        id: 2,
        name: 'Sarah Williams',
        position: 'Tech Lead',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        description: 'Oversees all technical operations and innovation.'
      },
      {
        id: 3,
        name: 'Michael Chen',
        position: 'Operations Lead',
        image: 'https://randomuser.me/api/portraits/men/22.jpg',
        description: 'Manages day-to-day operations and team coordination.'
      }
    ],
    members: [
      {
        id: 4,
        name: 'Emma Davis',
        position: 'Senior Developer',
        image: 'https://randomuser.me/api/portraits/women/63.jpg',
        description: 'Full-stack developer specializing in React and Node.js'
      },
      {
        id: 5,
        name: 'David Kim',
        position: 'UX Designer',
        image: 'https://randomuser.me/api/portraits/men/41.jpg',
        description: 'Creates intuitive user experiences and beautiful interfaces'
      },
      {
        id: 6,
        name: 'Priya Patel',
        position: 'Marketing Specialist',
        image: 'https://randomuser.me/api/portraits/women/33.jpg',
        description: 'Drives brand awareness and customer engagement'
      }
    ]
  };

  return (
    <div className="card-container-about-message">
      <div className="about-message">
        <div className="team-profiles-container" style={{padding:"4rem 4rem"}}>
          <h2 className="team-profiles__heading">Our Leadership Team</h2>

          {/* Leader Card */}
          <div className="team-profiles__leader">
            <ProfileCard
              {...teamData.leader}
              isLeader={true}
            />
          </div>

          {/* Sub Leaders */}
          <div className="team-profiles__subleaders">
            {teamData.subLeaders.map(person => (
              <ProfileCard
                key={person.id}
                {...person}
                isSubLeader={true}
              />
            ))}
          </div>

          {/* Team Members */}
          <div className="team-profiles__members">
            {teamData.members.map(person => (
              <ProfileCard
                key={person.id}
                {...person}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Profile Card Component
const ProfileCard = ({ name, position, image, description, isLeader, isSubLeader }) => {
  return (
    <div className={`profile-card ${isLeader ? 'profile-card--leader' : ''} ${isSubLeader ? 'profile-card--subleader' : ''}`}>
      <div className="profile-card__image-wrapper">
        <img
          src={image}
          alt={name}
          className="profile-card__image"
        />
        {isLeader && <div className="profile-card__badge">Leader</div>}
        {isSubLeader && <div className="profile-card__badge">Lead</div>}
      </div>
      <div className="profile-card__content">
        <h3 className="profile-card__name">{name}</h3>
        <p className="profile-card__position">{position}</p>
        <p className="profile-card__description">{description}</p>
        <div className="profile-card__social">
          <button className="profile-card__social-btn">
            <i className="fab fa-linkedin"></i>
          </button>
          <button className="profile-card__social-btn">
            <i className="fas fa-envelope"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamProfiles;