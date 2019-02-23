import React from 'react';


export default (props) => {
  // Takes a callback, a callback value, and text
  // Creates a button used for controls.
  return (
    <button
      onClick={props.onClick(props.value)}
      className="game__button">{props.text}</button>
  )
}
