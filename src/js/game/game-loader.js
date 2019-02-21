import React from 'react';
import { load } from 'js-yaml';


export default (props) => {
    return (
      <div className="game__uploader">
        <label className="game__uploader__label">
          <input type="file" className="game__uploader__input" onChange={props.handler} />
          Upload a Game
        </label>
        <button className="game__button--secondary" onClick={props.loadDefault}>
          Or load the example game
        </button>
    </div>
    )
}
