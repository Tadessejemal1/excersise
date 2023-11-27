// LoginComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';

const LoginComponent = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', loginData);
      console.log(response.data.message);
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <label>Email:</label>
      <input type="email" name="email" onChange={handleInputChange} />
      <br />
      <label>Password:</label>
      <input type="password" name="password" onChange={handleInputChange} />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
