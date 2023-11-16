import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EditForm.css'; 

const EditForm = ({ user, onSave, onCancel }) => {
  // Provide default values if user is undefined
  const initialName = user?.name || '';
  const initialEmail = user?.email || '';
  const initialPassword = user?.password || '';

  const [editedName, setEditedName] = useState(initialName);
  const [editedEmail, setEditedEmail] = useState(initialEmail);
  const [editedPassword, setEditedPassword] = useState(initialPassword);

  const handleSave = () => {
    const updatedUser = {
      name: editedName,
      email: editedEmail,
      password: editedPassword,
    };
    onSave(updatedUser);
  };

  return (
    <div className='div1'>
      <h3>Data Editing</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={editedEmail}
          onChange={(e) => setEditedEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={editedPassword}
          onChange={(e) => setEditedPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <Link to="/"><button onClick={onCancel}>Cancel</button></Link>
    </div>
  );
};

export default EditForm;

