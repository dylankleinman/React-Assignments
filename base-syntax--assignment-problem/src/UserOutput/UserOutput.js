import React from 'react';
import '../User.css';

const UserOutput = (props) => {
  return(
    <div className = 'User'>
      <p>Hello there!</p>
      <p>My username is {props.username}</p>
    </div>
  )
};

export default UserOutput;
