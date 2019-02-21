import React from 'react';
import sample_game from '../example/example.yaml';
import Game from './game';


export default () => {
  return (
    <React.Fragment>
      <Game game={sample_game} />
    </React.Fragment>
  )
}
