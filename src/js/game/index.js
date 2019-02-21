import React from 'react';
import TextBox from './text-box.js';
import ButtonHolder from './button-holder.js';
import Button from './button.js';


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: props.game,
      active: props.game.start,
    }
    this.changeLocation = this.changeLocation.bind(this);
  };
  changeLocation(name) {
    return (event) => {
      console.log(name);
      if (this.state.game[name]) {
        this.setState({active: this.state.game[name]})
      } else {
        console.log("Not found.")
      }
    }
  };
  render() {
    return (
      <div className="game">
        <TextBox text={this.state.active.text} />
        <ButtonHolder>
          {this.state.active.options.map((option) => (
            <Button
              text={option.text}
              value={option.location}
              onClick={this.changeLocation}
            />
          ))}
        </ButtonHolder>
      </div>
    )
  }
}
