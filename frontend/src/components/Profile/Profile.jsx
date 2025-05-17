// import React from 'react';
// import './profile.scss';

// const ProfileComponent = ({ studentData }) => {
//   return (
//     <div className="card-container-profile">
//       <div className="profile">
//         <div className="profile__container">
//           <div className="profile__image-column">
//             <div className="profile__image-wrapper">
//               <img 
//                 src={studentData.profilePhoto || "https://i.pinimg.com/736x/24/a0/13/24a01362722eac62358cd3d01ca51203.jpg"} 
//                 alt="Student Profile" 
//                 className="profile__image" 
//               />
//             </div>
//             <div className="profile__basic-info">
//               <h3 className="profile__name">{studentData.name}</h3>
//               <p className="profile__roll">{studentData.rollNumber}</p>
//               <p className="profile__dept">{studentData.department}</p>
//             </div>
//           </div>
//           <div className="profile__content-column">
//             <h2 className="profile__title">Student Details</h2>

//             <div className="profile__details-grid">
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">Father's Name:</span>
//                 <span className="profile__detail-value">{studentData.fatherName}</span>
//               </div>
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">Mother's Name:</span>
//                 <span className="profile__detail-value">{studentData.motherName}</span>
//               </div>
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">Date of Birth:</span>
//                 <span className="profile__detail-value">{studentData.dob}</span>
//               </div>
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">Blood Group:</span>
//                 <span className="profile__detail-value">{studentData.bloodGroup}</span>
//               </div>
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">Category:</span>
//                 <span className="profile__detail-value">{studentData.category}</span>
//               </div>
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">Address:</span>
//                 <span className="profile__detail-value">{studentData.address}</span>
//               </div>
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">Mobile:</span>
//                 <span className="profile__detail-value">{studentData.mobile}</span>
//               </div>
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">Institute Email:</span>
//                 <span className="profile__detail-value">{studentData.instituteEmail}</span>
//               </div>
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">Alternate Email:</span>
//                 <span className="profile__detail-value">{studentData.alternateEmail}</span>
//               </div>
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">LinkedIn:</span>
//                 <span className="profile__detail-value">
//                   {studentData.linkedin ? (
//                     <a href={studentData.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a>
//                   ) : 'Not provided'}
//                 </span>
//               </div>
//               <div className="profile__detail-item">
//                 <span className="profile__detail-label">GitHub:</span>
//                 <span className="profile__detail-value">
//                   {studentData.github ? (
//                     <a href={studentData.github} target="_blank" rel="noopener noreferrer">View Profile</a>
//                   ) : 'Not provided'}
//                 </span>
//               </div>
//             </div>

//             <div className="profile__academic-section">
//               <h3 className="profile__subtitle">Academic Information</h3>
//               <div className="profile__academic-grid">
//                 <div className="profile__detail-item">
//                   <span className="profile__detail-label">10th Board:</span>
//                   <span className="profile__detail-value">
//                     {studentData.tenthBoard}
//                     {studentData.otherTenthBoard && ` (${studentData.otherTenthBoard})`}
//                   </span>
//                 </div>
//                 <div className="profile__detail-item">
//                   <span className="profile__detail-label">12th Board:</span>
//                   <span className="profile__detail-value">
//                     {studentData.twelfthBoard}
//                     {studentData.otherTwelfthBoard && ` (${studentData.otherTwelfthBoard})`}
//                   </span>
//                 </div>
//                 <div className="profile__detail-item">
//                   <span className="profile__detail-label">12th Marks:</span>
//                   <span className="profile__detail-value">{studentData.twelfthMarks}</span>
//                 </div>
//                 <div className="profile__detail-item">
//                   <span className="profile__detail-label">JEE Year:</span>
//                   <span className="profile__detail-value">{studentData.jeeYear}</span>
//                 </div>
//                 <div className="profile__detail-item">
//                   <span className="profile__detail-label">JEE Score:</span>
//                   <span className="profile__detail-value">{studentData.jeeScore}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileComponent;
import { useAuth } from '../../context/authContext';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.scss';

import CircularProgress from '@mui/material/CircularProgress';
const ProfileComponent = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log(user);
        const token = user.token;
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-profile-data`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("User");
        setUserData(response.data);
      } catch (err) {
        setError(err.message || 'Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="card-container-profile">
        <div className="profile-loading">
          <CircularProgress color="primary" size={60} />
          <p>Loading profile data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card-container-profile">
        <div className="profile-error">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="card-container-profile">
        <div className="profile-error">
          <p>No user data available</p>
        </div>
      </div>
    );
  }

  return (<div className="card-container-about-message">
    <div className="about-message">
      <div className="card-container-profile">
        <div className="profile__container">
          <div className="profile__image-column">
            <div className="profile__image-wrapper">
              <img
                src={userData.profilePhoto || "https://i.pinimg.com/736x/24/a0/13/24a01362722eac62358cd3d01ca51203.jpg"}
                alt="Student Profile"
                className="profile__image"
              />
            </div>
            <div className="profile__basic-info">
              <h3 className="profile__name">{userData.name}</h3>
              <p className="profile__roll">{userData.rollNumber}</p>
              <p className="profile__dept">{userData.department}</p>
            </div>
          </div>
          <div className="profile__content-column">
            <h2 className="profile__title">Student Details</h2>


            <div className="profile__details-grid">
              <div className="profile__detail-item">
                <span className="profile__detail-label">Father's Name:</span>
                <span className="profile__detail-value">{userData.fatherName}</span>
              </div>
              <div className="profile__detail-item">
                <span className="profile__detail-label">Mother's Name:</span>
                <span className="profile__detail-value">{userData.motherName}</span>
              </div>
              <div className="profile__detail-item">
                <span className="profile__detail-label">Date of Birth:</span>
                <span className="profile__detail-value">{userData.dob}</span>
              </div>
              <div className="profile__detail-item">
                <span className="profile__detail-label">Blood Group:</span>
                <span className="profile__detail-value">{userData.bloodGroup}</span>
              </div>
              <div className="profile__detail-item">
                <span className="profile__detail-label">Category:</span>
                <span className="profile__detail-value">{userData.category}</span>
              </div>
              <div className="profile__detail-item">
                <span className="profile__detail-label">Address:</span>
                <span className="profile__detail-value">{userData.address}</span>
              </div>
              <div className="profile__detail-item">
                <span className="profile__detail-label">Mobile:</span>
                <span className="profile__detail-value">{userData.mobile}</span>
              </div>
              <div className="profile__detail-item">
                <span className="profile__detail-label">Institute Email:</span>
                <span className="profile__detail-value">{userData.instMail}</span>
              </div>
              <div className="profile__detail-item">
                <span className="profile__detail-label">Alternate Email:</span>
                <span className="profile__detail-value">{userData.alternateEmail || 'Not provided'}</span>
              </div>
              <div className="profile__detail-item">
                <span className="profile__detail-label">LinkedIn:</span>
                <span className="profile__detail-value">
                  {userData.linkedin ? (
                    <a href={userData.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a>
                  ) : 'Not provided'}
                </span>
              </div>
              <div className="profile__detail-item">
                <span className="profile__detail-label">GitHub:</span>
                <span className="profile__detail-value">
                  {userData.github ? (
                    <a href={userData.github} target="_blank" rel="noopener noreferrer">View Profile</a>
                  ) : 'Not provided'}
                </span>
              </div>
            </div>

            <div className="profile__academic-section">
              <h3 className="profile__subtitle">Academic Information</h3>
              <div className="profile__academic-grid">
                <div className="profile__detail-item">
                  <span className="profile__detail-label">10th Board:</span>
                  <span className="profile__detail-value">
                    {userData.tenthBoard}
                    {userData.otherTenthBoard && ` (${userData.otherTenthBoard})`}
                  </span>
                </div>
                <div className="profile__detail-item">
                  <span className="profile__detail-label">10th Marks:</span>
                  <span className="profile__detail-value">{userData.tenthMarks}</span>
                </div>
                <div className="profile__detail-item">
                  <span className="profile__detail-label">12th Board:</span>
                  <span className="profile__detail-value">
                    {userData.twelfthBoard}
                    {userData.otherTwelfthBoard && ` (${userData.otherTwelfthBoard})`}
                  </span>
                </div>
                <div className="profile__detail-item">
                  <span className="profile__detail-label">12th Marks:</span>
                  <span className="profile__detail-value">{userData.twelfthMarks}</span>
                </div>
                <div className="profile__detail-item">
                  <span className="profile__detail-label">JEE Year:</span>
                  <span className="profile__detail-value">{userData.jeeYear}</span>
                </div>
                <div className="profile__detail-item">
                  <span className="profile__detail-label">JEE Score:</span>
                  <span className="profile__detail-value">{userData.jeeScore}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProfileComponent;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './profile.scss';
// import '../Form/Form.scss';
// import { useAuth } from '../../context/authContext';
// import { useNavigate } from 'react-router-dom';
// import CircularProgress from '@mui/material/CircularProgress';

// const ProfileComponent = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     rollNumber: '',
//     department: '',
//     name: '',
//     fatherName: '',
//     motherName: '',
//     dob: '',
//     bloodGroup: '',
//     category: '',
//     address: '',
//     mobile: '',
//     instituteEmail: '',
//     alternateEmail: '',
//     skype: '',
//     linkedin: '',
//     github: '',
//     tenthBoard: '',
//     otherTenthBoard: '',
//     twelfthBoard: '',
//     otherTwelfthBoard: '',
//     twelfthMarks: '',
//     jeeYear: '',
//     jeeScore: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = user.token;
//         const response = await axios.get('http://localhost:5000/api/get-profile-data', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });

//         setUserData(response.data);
//         // Initialize form data with fetched user data
//         setFormData({
//           rollNumber: response.data.rollNumber || '',
//           department: response.data.department || '',
//           name: response.data.name || '',
//           fatherName: response.data.fatherName || '',
//           motherName: response.data.motherName || '',
//           dob: response.data.dob || '',
//           bloodGroup: response.data.bloodGroup || '',
//           category: response.data.category || '',
//           address: response.data.address || '',
//           mobile: response.data.mobile || '',
//           instituteEmail: response.data.instituteEmail || '',
//           alternateEmail: response.data.alternateEmail || '',
//           skype: response.data.skype || '',
//           linkedin: response.data.linkedin || '',
//           github: response.data.github || '',
//           tenthBoard: response.data.tenthBoard || '',
//           otherTenthBoard: response.data.otherTenthBoard || '',
//           twelfthBoard: response.data.twelfthBoard || '',
//           otherTwelfthBoard: response.data.otherTwelfthBoard || '',
//           twelfthMarks: response.data.twelfthMarks || '',
//           jeeYear: response.data.jeeYear || '',
//           jeeScore: response.data.jeeScore || ''
//         });
//       } catch (err) {
//         setError(err.message || 'Failed to fetch user data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const token = user.token;
//       const response = await fetch('http://localhost:5000/form', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       setUserData(data); // Update user data with response
//       setIsEditing(false); // Exit edit mode
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setError(error.message || 'Failed to update profile');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//     // Reset form data to original user data
//     setFormData({
//       rollNumber: userData.rollNumber || '',
//       department: userData.department || '',
//       name: userData.name || '',
//       fatherName: userData.fatherName || '',
//       motherName: userData.motherName || '',
//       dob: userData.dob || '',
//       bloodGroup: userData.bloodGroup || '',
//       category: userData.category || '',
//       address: userData.address || '',
//       mobile: userData.mobile || '',
//       instituteEmail: userData.instituteEmail || '',
//       alternateEmail: userData.alternateEmail || '',
//       skype: userData.skype || '',
//       linkedin: userData.linkedin || '',
//       github: userData.github || '',
//       tenthBoard: userData.tenthBoard || '',
//       otherTenthBoard: userData.otherTenthBoard || '',
//       twelfthBoard: userData.twelfthBoard || '',
//       otherTwelfthBoard: userData.otherTwelfthBoard || '',
//       twelfthMarks: userData.twelfthMarks || '',
//       jeeYear: userData.jeeYear || '',
//       jeeScore: userData.jeeScore || ''
//     });
//   };

//   if (loading) {
//     return (
//       <div className="card-container-profile">
//         <div className="profile-loading">
//           <CircularProgress color="primary" size={60} />
//           <p>Loading profile data...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="card-container-profile">
//         <div className="profile-error">
//           <p>Error: {error}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!userData) {
//     return (
//       <div className="card-container-profile">
//         <div className="profile-error">
//           <p>No user data available</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="page-wrapper">
//       <div className="profile-container">
//         <div className="profile-header">
//           <h1>Student Profile</h1>
//           {!isEditing ? (
//             <button className="edit-button" onClick={handleEditClick}>
//               Edit Profile
//             </button>
//           ) : (
//             <div className="edit-buttons">
//               <button 
//                 className="save-button" 
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Saving...' : 'Save Changes'}
//               </button>
//               <button className="cancel-button" onClick={handleCancelClick}>
//                 Cancel
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="profile-content">
//           <div className="profile-image-section">
//             <div className="profile-image-wrapper">
//               <img
//                 src={userData.profilePhoto || "https://i.pinimg.com/736x/24/a0/13/24a01362722eac62358cd3d01ca51203.jpg"}
//                 alt="Student Profile"
//                 className="profile-image"
//               />
//             </div>
//             <div className="profile-basic-info">
//               {isEditing ? (
//                 <>
//                   <div className="form-group">
//                     <label htmlFor="rollNumber">Roll Number</label>
//                     <input
//                       id="rollNumber"
//                       name="rollNumber"
//                       type="text"
//                       value={formData.rollNumber}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <h2>{userData.name}</h2>
//                   <p className="roll-number">{userData.rollNumber}</p>
//                   <p className="department">{userData.department}</p>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="profile-details">
//             <h3>Personal Information</h3>
//             <div className="details-grid">
//               <div className="detail-item">
//                 <span className="detail-label">Father's Name:</span>
//                 {isEditing ? (
//                   <input
//                     name="fatherName"
//                     type="text"
//                     value={formData.fatherName}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.fatherName}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Mother's Name:</span>
//                 {isEditing ? (
//                   <input
//                     name="motherName"
//                     type="text"
//                     value={formData.motherName}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.motherName}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Date of Birth:</span>
//                 {isEditing ? (
//                   <input
//                     name="dob"
//                     type="date"
//                     value={formData.dob}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.dob}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Blood Group:</span>
//                 {isEditing ? (
//                   <input
//                     name="bloodGroup"
//                     type="text"
//                     value={formData.bloodGroup}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.bloodGroup}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Category:</span>
//                 {isEditing ? (
//                   <input
//                     name="category"
//                     type="text"
//                     value={formData.category}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.category}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Address:</span>
//                 {isEditing ? (
//                   <textarea
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.address}</span>
//                 )}
//               </div>
//             </div>

//             <h3>Contact Information</h3>
//             <div className="details-grid">
//               <div className="detail-item">
//                 <span className="detail-label">Mobile:</span>
//                 {isEditing ? (
//                   <input
//                     name="mobile"
//                     type="tel"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.mobile}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Institute Email:</span>
//                 {isEditing ? (
//                   <input
//                     name="instituteEmail"
//                     type="email"
//                     value={formData.instituteEmail}
//                     onChange={handleChange}
//                     disabled
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.instituteEmail}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">Alternate Email:</span>
//                 {isEditing ? (
//                   <input
//                     name="alternateEmail"
//                     type="email"
//                     value={formData.alternateEmail}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.alternateEmail}</span>
//                 )}
//               </div>
//             </div>

//             <h3>Social Media</h3>
//             <div className="details-grid">
//               <div className="detail-item">
//                 <span className="detail-label">Skype:</span>
//                 {isEditing ? (
//                   <input
//                     name="skype"
//                     type="text"
//                     value={formData.skype}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.skype}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">LinkedIn:</span>
//                 {isEditing ? (
//                   <input
//                     name="linkedin"
//                     type="url"
//                     value={formData.linkedin}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.linkedin}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">GitHub:</span>
//                 {isEditing ? (
//                   <input
//                     name="github"
//                     type="url"
//                     value={formData.github}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.github}</span>
//                 )}
//               </div>
//             </div>

//             <h3>Academic Information</h3>
//             <div className="details-grid">
//               <div className="detail-item">
//                 <span className="detail-label">10th Board:</span>
//                 {isEditing ? (
//                   <select
//                     name="tenthBoard"
//                     value={formData.tenthBoard}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select Board</option>
//                     <option value="CBSE">CBSE</option>
//                     <option value="ICSE">ICSE</option>
//                     <option value="State Board">State Board</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 ) : (
//                   <span className="detail-value">{userData.tenthBoard}</span>
//                 )}
//               </div>
//               {isEditing && formData.tenthBoard === 'Other' && (
//                 <div className="detail-item">
//                   <span className="detail-label">Other 10th Board:</span>
//                   <input
//                     name="otherTenthBoard"
//                     type="text"
//                     value={formData.otherTenthBoard}
//                     onChange={handleChange}
//                   />
//                 </div>
//               )}
//               <div className="detail-item">
//                 <span className="detail-label">12th Board:</span>
//                 {isEditing ? (
//                   <select
//                     name="twelfthBoard"
//                     value={formData.twelfthBoard}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select Board</option>
//                     <option value="CBSE">CBSE</option>
//                     <option value="ICSE">ICSE</option>
//                     <option value="State Board">State Board</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 ) : (
//                   <span className="detail-value">{userData.twelfthBoard}</span>
//                 )}
//               </div>
//               {isEditing && formData.twelfthBoard === 'Other' && (
//                 <div className="detail-item">
//                   <span className="detail-label">Other 12th Board:</span>
//                   <input
//                     name="otherTwelfthBoard"
//                     type="text"
//                     value={formData.otherTwelfthBoard}
//                     onChange={handleChange}
//                   />
//                 </div>
//               )}
//               <div className="detail-item">
//                 <span className="detail-label">12th Marks (%):</span>
//                 {isEditing ? (
//                   <input
//                     name="twelfthMarks"
//                     type="number"
//                     value={formData.twelfthMarks}
//                     onChange={handleChange}
//                     min="0"
//                     max="100"
//                     step="0.01"
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.twelfthMarks}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">JEE Year:</span>
//                 {isEditing ? (
//                   <input
//                     name="jeeYear"
//                     type="number"
//                     value={formData.jeeYear}
//                     onChange={handleChange}
//                     min="2000"
//                     max={new Date().getFullYear()}
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.jeeYear}</span>
//                 )}
//               </div>
//               <div className="detail-item">
//                 <span className="detail-label">JEE Score:</span>
//                 {isEditing ? (
//                   <input
//                     name="jeeScore"
//                     type="number"
//                     value={formData.jeeScore}
//                     onChange={handleChange}
//                     min="0"
//                     step="0.01"
//                   />
//                 ) : (
//                   <span className="detail-value">{userData.jeeScore}</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileComponent;