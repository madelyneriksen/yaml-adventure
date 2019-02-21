import React from 'react';
import Typist from 'react-typist';


export default (props) => {
  return (
    <pre className="game__text-box">
      <Typist cursor={{show: false}} avgTypingDelay={30} key={props.text}>{props.text}</Typist>
    </pre>
  )
}
