import React from 'react';
import ButtonHolder from './button-holder.js';
import Button from './button.js';
import QuitButton from './quit-button.js';

export default (props) => (
  <div className="game__controls">
    <ButtonHolder>
      {props.active.options && props.active.options.map((option) => (
        <Button
          text={option.text}
          key={option.text}
          value={option.location}
          onClick={props.changeLocation}
        />
      ))}
    </ButtonHolder>
    <QuitButton
      clearGame={props.clearGame} />
  </div>
)
