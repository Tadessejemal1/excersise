import React, { useState } from 'react';
import axios from 'axios';

const RegistrationComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_no: '',
    technologies: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post('/api/register', formData);
      console.log(response.data.message);
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleInputChange} />
      <br />
      <label>Email:</label>
      <input type="email" name="email" onChange={handleInputChange} />
      <br />
      <label>Phone Number:</label>
      <input type="text" name="phone_no" onChange={handleInputChange} />
      <br />
      <label>Technologies (comma-separated):</label>
      <input type="text" name="technologies" onChange={handleInputChange} />
      <br />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationComponent;
