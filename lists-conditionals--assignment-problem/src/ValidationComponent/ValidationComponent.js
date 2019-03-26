import React from 'react';

const ValidationComponent = (props) => {
  let words = null;
  if(props.strlength > 5){
    words = <p>Text long enough</p>
  } else {
    words = <p>Text too short</p>
  }
  return (
    <div>
      {words}
    </div>
  )
};

export default ValidationComponent;
