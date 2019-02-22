import React from 'react';
import TextBox from './text-box.js';
import ButtonHolder from './button-holder.js';
import Button from './button.js';
import GameLoader from './game-loader.js';
import QuitButton from './quit-button.js';
import { safeLoad } from 'js-yaml';
import sample_game from '../../example/example.yaml';


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.game ? props.game : false,
      active: props.game && props.game.start ? props.game.start : false,
    }
    this.changeLocation = this.changeLocation.bind(this);
    this.uploadGame = this.uploadGame.bind(this);
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

  uploadGame(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        var raw = String(event.target.result);
        try {
          var uploadedData = safeLoad(raw);
          this.setState({game: uploadedData, active: uploadedData.start});
        } catch (e) {
          console.log(e);
        };
      };
      reader.readAsText(file);
    }
  };

  loadDefault(event) {
    this.setState({game: sample_game, active: sample_game.start});
  };

  clearGame(event) {
    this.setState({game: false, active: false});
  }

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
          handler={this.uploadGame}
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
