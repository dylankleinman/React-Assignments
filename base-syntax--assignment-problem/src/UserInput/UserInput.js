import React from 'react';
import '../User.css';


const UserInput = (props) => {
  const style = {
    backgroundColor: 'blue',
    color: 'purple',
  };

  return(
    <div className = 'User' style = {style}>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default UserInput;
