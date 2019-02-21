import React from 'react';
import Typist from 'react-typist';


export default (props) => {
  return (
    <pre class="game__text-box">
      <Typist cursor={{show: false}} avgTypingDelay={35}>{props.text}</Typist>
    </pre>
  )
}
