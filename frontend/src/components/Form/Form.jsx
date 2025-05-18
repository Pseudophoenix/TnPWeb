import React, { useState, useEffect } from 'react';
import './Form.scss';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';
import axios from 'axios'; // or your preferred HTTP client

function StudentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [formData, setFormData] = useState({
    rollNumber: '',
    department: '',
    name: '',
    fatherName: '',
    motherName: '',
    dob: '',
    bloodGroup: '',
    category: '',
    address: '',
    mobile: '',
    instituteEmail: '',
    alternateEmail: '',
    skype: '',
    linkedin: '',
    github: '',
    tenthBoard: '',
    otherTenthBoard: '',
    twelfthBoard: '',
    otherTwelfthBoard: '',
    twelfthMarks: '',
    jeeYear: '',
    jeeScore: ''
  });

  const { user } = useAuth(); // Assuming you have auth context for tokens
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-profile-data`, {
          headers: {
            Authorization: `Bearer ${user.token}` // or however your auth works
          }
        });
        
        const profileData = response.data;
        
        // Map the API response to your formData structure
        setFormData({
          rollNumber: profileData.rollNumber || '',
          department: profileData.department || '',
          name: profileData.name || '',
          fatherName: profileData.fatherName || '',
          motherName: profileData.motherName || '',
          dob: profileData.dob || '',
          bloodGroup: profileData.bloodGroup || '',
          category: profileData.category || '',
          address: profileData.address || '',
          mobile: profileData.mobile || '',
          instituteEmail: profileData.instMail || '', // Note the mapping here
          alternateEmail: profileData.alternateEmail || '',
          skype: profileData.skype || '',
          linkedin: profileData.linkedin || '',
          github: profileData.github || '',
          tenthBoard: profileData.tenthBoard || '',
          tenthMarks: profileData.tenthMarks || '',
          twelfthBoard: profileData.twelfthBoard || '',
          otherTwelfthBoard: profileData.otherTwelfthBoard || '',
          twelfthMarks: profileData.twelfthMarks || '',
          jeeYear: profileData.jeeYear || '',
          jeeScore: profileData.jeeScore || ''
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
        // Handle error (maybe show a toast or message)
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [user.token]); // Add dependencies as needed
  // const { user } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitting(true);

    try {
      // Replace 'your_token_here' with your actual bearer token

      const token = user.token;

      const response = await fetch(`${import.meta.env.VITE_API_URL}/form`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Success:', data);
      navigate("/");
      // Handle successful submission (e.g., show success message, redirect, etc.)
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      console.log("Hey");
      // setTimeout(()=>{
        setIsSubmitting(false);
        // console.log("Heyaaa");
      // },3000);

    }
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="form-container">
          <h2 className="team-profiles__heading">{"Student Information Form"}</h2>
          <form className="student-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="rollNumber">Roll Number</label>
              <input
                id="rollNumber"
                name="rollNumber"
                type="text"
                placeholder="e.g., B19CS001"
                value={formData.rollNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="CSE-AIDS">CSE-AIDS</option>
                <option value="ECE">ECE</option>
                <option value="ECE-VLSI">ECE-VLSI</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="fatherName">Father's Name</label>
              <input
                id="fatherName"
                name="fatherName"
                type="text"
                placeholder="Full Name"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="motherName">Mother's Name</label>
              <input
                id="motherName"
                name="motherName"
                type="text"
                placeholder="Full Name"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                name="dob"
                type="date"
                placeholder="DD/MM/YYYY"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
              >
                <option value="">Select Blood Group</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="EWS">EWS</option>
                <option value="General">General</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="address">Postal Address for Communication</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                placeholder="Enter your complete postal address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="10-digit mobile number"
                value={formData.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="instituteEmail">Institute Email Address</label>
              <input
                id="instituteEmail"
                name="instituteEmail"
                type="email"
                placeholder="example@institute.ac.in"
                value={formData.instituteEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="alternateEmail">Alternate Email</label>
              <input
                id="alternateEmail"
                name="alternateEmail"
                type="email"
                placeholder="example@gmail.com"
                value={formData.alternateEmail}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="skype">Skype Address</label>
              <input
                id="skype"
                name="skype"
                type="text"
                placeholder="live:username or username"
                value={formData.skype}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn Profile</label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/username"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="github">Github Link</label>
              <input
                id="github"
                name="github"
                type="url"
                placeholder="https://github.com/username"
                value={formData.github}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tenthBoard">10th Board</label>
              <input
                id="tenthBoard"
                name="tenthBoard"
                type="text"
                placeholder="CBSE/ICSE/State Board"
                value={formData.tenthBoard}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="otherTenthBoard">If the 10th board is other than above</label>
              <input
                id="otherTenthBoard"
                name="otherTenthBoard"
                type="text"
                placeholder="Please specify your board"
                value={formData.otherTenthBoard}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tenthMarks">10th Marks</label>
              <input
                id="tenthMarks"
                name="tenthMarks"
                type="text"
                placeholder="Percentage or CGPA"
                value={formData.tenthMarks}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="twelfthBoard">12th Board</label>
              <input
                id="twelfthBoard"
                name="twelfthBoard"
                type="text"
                placeholder="CBSE/ICSE/State Board"
                value={formData.twelfthBoard}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="otherTwelfthBoard">If the 12th board is other than above</label>
              <input
                id="otherTwelfthBoard"
                name="otherTwelfthBoard"
                type="text"
                placeholder="Please specify your board"
                value={formData.otherTwelfthBoard}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="twelfthMarks">12th Marks</label>
              <input
                id="twelfthMarks"
                name="twelfthMarks"
                type="text"
                placeholder="Percentage or CGPA"
                value={formData.twelfthMarks}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="jeeYear">JEE Completion Year</label>
              <input
                id="jeeYear"
                name="jeeYear"
                type="text"
                placeholder="e.g., 2020"
                value={formData.jeeYear}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="jeeScore">JEE Score</label>
              <input
                id="jeeScore"
                name="jeeScore"
                type="text"
                placeholder="e.g., 200/300"
                value={formData.jeeScore}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn" disabled={isSubmitting}>  {isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentForm;