import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit_Login = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:3000/api/user/login', { username, password });
      console.log(response.data); // Handle successful signup
      navigate('/home');
    } catch (error) {
      console.log(error); // Handle error
      setErrorMessage('Invalid username or password');
    }
  };
  const handleSubmit_Signup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:3000/api/user/signup', { username, password });
      console.log(response.data); // Handle successful signup
      navigate('/home');
    } catch (error) {
      console.log(error); // Handle error
      setErrorMessage('Invalid username or password');
    }
  };
  return (
    // Your signup form JSX
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-8">OUR CLASS</h2>
      <form className="w-1/3" >
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border border-gray-400 rounded"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-400 rounded"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex items-center justify-between">
          <button onClick={handleSubmit_Login}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
          <button onClick={handleSubmit_Signup}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
