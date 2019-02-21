import React from 'react';
import TextBox from './game/text-box';
import GameButton from './game/button';
import ButtonHolder from './game/button-holder';


export default () => {
  const text = `
Welcome to Yaml Adventure!

Create your adventure file and save it as a yaml.
  `;
  const clickCallback = (value) => {
    return (event) => {
      console.log(value);
    }
  }
  return (
    <React.Fragment>
      <TextBox text={text} />
      <ButtonHolder>
        <GameButton text="Let's Play!" value="getting_started" onClick={clickCallback} />
      </ButtonHolder>
    </React.Fragment>

  )
}
