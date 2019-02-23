import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import GameUploader from '../../src/js/game/game-loader.js';


it("Parses an uploaded YAML file correctly", () => {
  var resultStore = {}
  const fakeSwapGame = (uploadedGame) => {
    resultStore = uploadedGame
  }
  var uploader = shallow(<GameUploader swapGame={fakeSwapGame} />);
  const fakeEvent = {
    target: {
      result: `is_yaml_file: true`
    }
  };
  uploader.instance().parseUpload(fakeEvent);
  expect(resultStore.is_yaml_file).toEqual(true);
})
