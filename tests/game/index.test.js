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
        {"text": "There is one option", "location": "start"},
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
        {"text": "Goto end", "location": "end"},
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

it("prevents invalid game objects from populating props", () => {
  const badGameState = {
    "not_start_prop": {
      "text": "There is no start prop",
      "options": []
    }
  };
  const game = shallow(<Game game={badGameState} />);
  expect(game.state("game")).toEqual(false);
  expect(game.state("active")).toEqual(false);
})

it("Swaps to a newly provided game.", () => {
  const gameOne = {
    "start": {
      "text": "Game one!",
      "options": []
    }
  };
  const gameTwo = {
    "start": {
      "text": "Game two!",
      "options": [],
    }
  };
  const game = shallow(<Game game={gameOne} />);
  expect(game.state("active").text).toEqual("Game one!");
  game.instance().swapGame(gameTwo);
  expect(game.state("active").text).toEqual("Game two!");
})

it("Doesn't to a newly provided game if the game is invalid.", () => {
  const gameOne = {
    "start": {
      "text": "Game one!",
      "options": []
    }
  };
  const gameTwo = {
    "badStart": {
      "text": "Invalid game!",
      "options": []
    }
  };
  const game = shallow(<Game game={gameOne} />);
  expect(game.state("active").text).toEqual("Game one!");
  game.instance().swapGame(gameTwo);
  expect(game.state("active").text).toEqual("Game one!");
  expect(game.state("error").includes('need a "start"')).toEqual(true);
})
