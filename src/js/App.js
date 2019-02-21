import React from 'react';
import TextBox from './game/text-box';


export default () => {
  const text = `
Welcome to Yaml Adventure!

Create your adventure file and save it as a yaml.
  `;
  return (
    <TextBox text={text} />
  )
}
