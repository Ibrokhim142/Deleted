import React, { useState, useEffect } from "react";
import axios from "axios";
import FiredUsers from "./pages/FiredUsers/FiredUsers";
import UserCard from "./pages/userCard/UserCard";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [firedUsers, setFiredUsers] = useState(() => {
    const saved = localStorage.getItem("firedUsers");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1")
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  const handleFireUser = (user) => {
    if (!firedUsers.includes(user)) {
      const updatedFiredUsers = [...firedUsers, user];
      setFiredUsers(updatedFiredUsers);
      localStorage.setItem("firedUsers", JSON.stringify(updatedFiredUsers));
    }
  };

  return (
    <div className="App">
      <h1>Users</h1>
      <div className="fired__users__tittle">
        {users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onFire={() => handleFireUser(user)}
          />
        ))}
      </div>
      <FiredUsers users={firedUsers} />
    </div>
  );
};

export default App;
