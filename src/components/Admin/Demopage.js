import React, { useState } from 'react';
import './Demo.css';
import { Link } from 'react-router-dom';
import EditForm from './EditForm';

const Demopage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localStorageData, setLocalStorageData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  

  const handleRegister = () => {
    const user = { name, email, password };
    // Fetch the existing data or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem('users')) || [];
    // Append the new user data
    const updatedData = [...existingData, user];
    // Store the updated data in local storage
    localStorage.setItem('users', JSON.stringify(updatedData));
    alert('Registration successful');
    console.log(user);
  };

  const handleDisplayLocalStorageData = () => {
    // Fetch data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('users'));

    if (storedUserData) {
      setLocalStorageData(storedUserData);
    }
  };

  const handleDeleteData = (index) => {
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    
    if (confirmed) {
      const updatedData = [...localStorageData];
      updatedData.splice(index, 1); // Remove the user data at the specified index
      setLocalStorageData(updatedData);
      // Update local storage with the updated data
      localStorage.setItem('users', JSON.stringify(updatedData));
    }
  };
  const handleSave = (updatedUser) => {
    const updatedData = localStorageData.map((user) =>
      user === selectedUser ? { ...user, ...updatedUser } : user
    );
    setLocalStorageData(updatedData);
    localStorage.setItem('users', JSON.stringify(updatedData));
    setSelectedUser(null);
  };

  return (
    <div className='main'>
      <form onSubmit={handleRegister}>
        <div className='form-container'>
          <h2>Registration Form</h2>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Register</button>
          <button type="button" onClick={handleDisplayLocalStorageData}>
            Display Data
          </button>
          {localStorageData && (
            <div>
              <h3>Data:</h3>
              {localStorageData.map((user, index) => (
                <div key={index}>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                  <p>Password: {user.password}</p>
                  <Link to = "/EditForm" onClick={() => setSelectedUser(user)}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDeleteData(index)}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
      {selectedUser && (
        <EditForm user={selectedUser} onSave={handleSave} onCancel={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default Demopage;


