import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Our Class</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-400">Log In</Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
