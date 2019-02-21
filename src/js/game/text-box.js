import React from 'react';
import Typist from 'react-typist';


export default (props) => {
  return (
    <pre className="game__text-box">
      <Typist cursor={{show: false}} avgTypingDelay={35} key={props.text}>{props.text}</Typist>
    </pre>
  )
}
