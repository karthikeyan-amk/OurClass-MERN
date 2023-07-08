import React, { useState } from 'react';
import Tasks from './HomePageComponents/Tasks';
import Announcements from './HomePageComponents/Announcements';
import CourseMaterials from './HomePageComponents/CourseMaterials';

function HomePage() {
  const [selectedOption, setSelectedOption] = useState('tasks');

  const renderComponent = () => {
    switch (selectedOption) {
      case 'tasks':
        return <Tasks />;
      case 'announcements':
        return <Announcements />;
      case 'courseMaterials':
        return <CourseMaterials />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Home Page</h2>

      <div className="mb-4">
        <button
          className={`mr-4 ${
            selectedOption === 'tasks' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('tasks')}
        >
          Tasks
        </button>
        <button
          className={`mr-4 ${
            selectedOption === 'announcements' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('announcements')}
        >
          Announcements
        </button>
        <button
          className={`mr-4 ${
            selectedOption === 'courseMaterials' ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setSelectedOption('courseMaterials')}
        >
          Course Materials
        </button>
      </div>

      {renderComponent()}
    </div>
  );
}

export default HomePage;
