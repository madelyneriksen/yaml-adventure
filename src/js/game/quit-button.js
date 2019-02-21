import React from 'react';


export default (props) => (
  <div className="game__button-holder">
    <button
      onClick={props.clearGame}
      className="game__button--secondary"
    >Load another game
    </button>
  </div>
)
