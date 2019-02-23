import React from 'react';
import TextBox from './text-box.js';
import Controls from './controls/index.js';
import GameLoader from './game-loader.js';
import sample_game from '../../example/example.yaml';
import validateGame from '../helpers/gameValidator';


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    if (!props.game) {
      var [valid, game, msg] = [false, {}, ''];
    } else {
      var [valid, game, msg] = validateGame(props.game);
    }
    this.state = {
      game: valid ? props.game : false,
      active: valid ? props.game.start : false,
      error: msg,
    }
    this.changeLocation = this.changeLocation.bind(this);
    this.swapGame = this.swapGame.bind(this);
    this.loadDefault = this.loadDefault.bind(this);
    this.clearGame = this.clearGame.bind(this);
  };

  changeLocation(name) {
    return (event) => {
      if (this.state.game[name]) {
        this.setState({active: this.state.game[name]})
      } else {
        console.log(`Path ${name} Not found.`)
      }
    }
  };

  swapGame(uploadedGame) {
    const [valid, game, msg] = validateGame(uploadedGame);
    if (valid) {
      this.setState({
        game: game,
        active: game.start,
        error: '',
      });
    } else {
      this.setState({error: msg});
    }
  };

  loadDefault(event) {
    this.swapGame(sample_game);
  };

  clearGame(event) {
    this.setState({game: false, active: false});
  };

  render() {
    if (this.state.game) {
      var internals = (
        <div className="game">
          <TextBox text={this.state.active.text} />
          <Controls
            active={this.state.active}
            clearGame={this.clearGame}
            changeLocation={this.changeLocation} />
        </div>
      )
    } else {
      var internals = (
        <GameLoader
          swapGame={this.swapGame}
          loadDefault={this.loadDefault} />
      )
    };
    return internals;
  }
}
