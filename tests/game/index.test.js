import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Game from '../../src/js/game/index.js';


it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it("populates initial game state", () => {
  const gameState = {
    "start": {
      "text": "Welcome to the test adventure!",
      "options": [
        {"text": "There is one option", "value": "start"},
      ]
    }

  }
  const game = shallow(<Game game={gameState} />);
  expect(game.state("active").text).toEqual("Welcome to the test adventure!");
  expect(game.state("active").options[0].text).toEqual("There is one option");
})

it("switches to different game states when options are selected", () => {
  const gameState = {
    "start": {
      "text": "This is another test adventure",
      "options": [
        {"text": "Goto end", "value": "end"},
      ]
    },
    "end": {
      "text": "Welcome to the End",
      "options": []
    },
  };
  const game = shallow(<Game game={gameState} />);
  expect(game.state("active").text).toEqual("This is another test adventure");
  const callback = game.instance().changeLocation("end");
  callback({});
  expect(game.state("active").text).toEqual("Welcome to the End");
  expect(game.state("active").options).toEqual([]);
})
