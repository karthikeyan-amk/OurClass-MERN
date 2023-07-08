import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Tasks() {
  // Sample tasks data
  const [tasks, setTasks] = useState([]); 
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Function to toggle task completion status
  const toggleTaskStatus = (taskId) => {
    setTasks(prevTasks => {
      return prevTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            className={`py-2 flex items-center ${task.completed ? 'line-through text-gray-500' : ''}`}
          >
            <input
              type="checkbox"
              className="mr-2 form-checkbox h-5 w-5"
              checked={task.completed}
              onChange={() => toggleTaskStatus(task.id)}
            />
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
