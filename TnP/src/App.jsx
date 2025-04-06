import { useState } from 'react';
import './App.scss';
import Form from './Form.jsx';
import Header from './includes/Header.jsx';
import Tail from './includes/Tail.jsx';

function App() {
  return (
    <>
      {/* <div className="page-wrapper">
        <div className="form-container">
          <h1>Student Information Form</h1>
          <form className="student-form">
            <div className="form-group">
              <label htmlFor="rollNumber">Roll Number</label>
              <input id="rollNumber" name="rollNumber" type="text" placeholder="e.g., B19CS001" />
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select id="department" name="department">
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="CSE-AIDS">CSE-AIDS</option>
                <option value="ECE">ECE</option>
                <option value="ECE-VLSI">ECE-VLSI</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Full Name" />
            </div>

            <div className="form-group">
              <label htmlFor="fatherName">Father's Name</label>
              <input id="fatherName" name="fatherName" type="text" placeholder="Full Name" />
            </div>

            <div className="form-group">
              <label htmlFor="motherName">Mother's Name</label>
              <input id="motherName" name="motherName" type="text" placeholder="Full Name" />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input id="dob" name="dob" type="date" placeholder="DD/MM/YYYY" />
            </div>

            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select id="bloodGroup" name="bloodGroup">
                <option value="">Select Blood Group</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category">
                <option value="">Select Category</option>
                <option value="EWS">EWS</option>
                <option value="General">General</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="address">Postal Address for Communication</label>
              <textarea id="address" name="address" rows="3" placeholder="Enter your complete postal address"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input id="mobile" name="mobile" type="tel" placeholder="10-digit mobile number" />
            </div>

            <div className="form-group">
              <label htmlFor="instituteEmail">Institute Email Address</label>
              <input id="instituteEmail" name="instituteEmail" type="email" placeholder="example@institute.ac.in" />
            </div>

            <div className="form-group">
              <label htmlFor="alternateEmail">Alternate Email</label>
              <input id="alternateEmail" name="alternateEmail" type="email" placeholder="example@gmail.com" />
            </div>

            <div className="form-group">
              <label htmlFor="skype">Skype Address</label>
              <input id="skype" name="skype" type="text" placeholder="live:username or username" />
            </div>

            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn Profile</label>
              <input id="linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/username" />
            </div>

            <div className="form-group">
              <label htmlFor="github">Github Link</label>
              <input id="github" name="github" type="url" placeholder="https://github.com/username" />
            </div>

            <div className="form-group">
              <label htmlFor="tenthBoard">10th Board</label>
              <input id="tenthBoard" name="tenthBoard" type="text" placeholder="CBSE/ICSE/State Board" />
            </div>

            <div className="form-group">
              <label htmlFor="otherTenthBoard">If the 10th board is other than above</label>
              <input id="otherTenthBoard" name="otherTenthBoard" type="text" placeholder="Please specify your board" />
            </div>

            <div className="form-group">
              <label htmlFor="twelfthBoard">12th Board</label>
              <input id="twelfthBoard" name="twelfthBoard" type="text" placeholder="CBSE/ICSE/State Board" />
            </div>

            <div className="form-group">
              <label htmlFor="otherTwelfthBoard">If the 12th board is other than above</label>
              <input id="otherTwelfthBoard" name="otherTwelfthBoard" type="text" placeholder="Please specify your board" />
            </div>

            <div className="form-group">
              <label htmlFor="twelfthMarks">12th Marks</label>
              <input id="twelfthMarks" name="twelfthMarks" type="text" placeholder="Percentage or CGPA" />
            </div>

            <div className="form-group">
              <label htmlFor="jeeYear">JEE Completion Year</label>
              <input id="jeeYear" name="jeeYear" type="text" placeholder="e.g., 2020" />
            </div>

            <div className="form-group">
              <label htmlFor="jeeScore">JEE Score</label>
              <input id="jeeScore" name="jeeScore" type="text" placeholder="e.g., 200/300" />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div> */}
      <Header></Header>
      <Form></Form>
      <Tail></Tail>
    </>
  );
}

export default App;
