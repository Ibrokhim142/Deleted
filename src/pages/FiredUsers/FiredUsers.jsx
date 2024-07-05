import React from "react";

const FiredUsers = ({ users }) => {
  return (
    <div className="fired-users">
      <h2>Ishdan Bo'shatilganlar</h2>
      {users.length > 0 ? (
        users.map(user => (
          <div key={user.id} className="fired-user">
            <img src={user.avatar} alt={user.first_name} />
            <h4>{user.first_name} {user.last_name}</h4>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <p>Hozircha ishdan bo'shatilganlar yo'q.</p>
      )}
    </div>
  );
};

export default FiredUsers;
