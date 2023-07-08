import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          
          <Route path="/" Component={Login} />
          <Route path="/home" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/contact" Component={ContactPage} />
          </Routes> 
      </div>
    </Router>
  );
}

export default App