import React from "react";

const UserCard = ({ user, onFire }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.first_name} />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
      <button onClick={onFire}>Ishdan Bo'shatish</button>
    </div>
  );
};

export default UserCard;
