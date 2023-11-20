// App.jsx
import React, { useState } from 'react';
import UserList from './UserList';

const App = () => {
  const [allUsers, setAllUsers] = useState([]);

  const handleFormSubmit = (userData) => {
    setAllUsers([...allUsers, userData]);
  };

  return (
    <div>
      <h2>Formulaire d'authentification et liste d'utilisateurs</h2>
      <UserList onSubmit={handleFormSubmit} users={allUsers} />
    </div>
  );
};

export default App;
