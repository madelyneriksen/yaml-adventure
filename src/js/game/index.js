import React from 'react';
import TextBox from './text-box.js';
import ButtonHolder from './button-holder.js';
import Button from './button.js';
import GameLoader from './game-loader.js';
import QuitButton from './quit-button.js';
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
      })
    } else {
      this.setState({
        error: msg,
      })
    }
  }

  loadDefault(event) {
    this.swapGame(sample_game);
  };

  clearGame(event) {
    this.setState({game: false, active: false});
  };

  render() {
    var internals;
    if (this.state.game) {
      internals = (
        <React.Fragment>
          <TextBox text={this.state.active.text} />
          <div className="game__controls">
            <ButtonHolder>
              {this.state.active.options && this.state.active.options.map((option) => (
                <Button
                  text={option.text}
                  key={option.text}
                  value={option.location}
                  onClick={this.changeLocation}
                />
              ))}
            </ButtonHolder>
            <QuitButton
              clearGame={this.clearGame} />
          </div>
        </React.Fragment>
      )
    } else {
      internals = (
        <GameLoader
          swapGame={this.swapGame}
          loadDefault={this.loadDefault}
        />
      )
    };
    return (
      <div className="game">
        {internals}
      </div>
    )
  }
}
