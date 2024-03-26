import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-96 p-8 bg-white rounded-lg shadow-xl'>
        <h1 className='text-4xl font-bold mb-6 text-center'>To-Do List</h1>
        <div className='flex items-center mb-4'>
          <input
            type='text'
            value={newTask}
            onChange={handleInputChange}
            placeholder='Enter task'
            style={{ letterSpacing: '0.1em' }}
            className='flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none'
          />
          <button
            onClick={handleAddTask}
            className='px-6 py-2 bg-lime-500 text-white rounded-r-md hover:bg-lime-600 focus:outline-none'
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className='flex justify-between items-center mb-2'>
              <span style={{ letterSpacing: '0.1em' }}>{task}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className='px-2 py-1 bg-rose-500 text-white rounded-md hover:bg-rose-600 focus:outline-none'
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
