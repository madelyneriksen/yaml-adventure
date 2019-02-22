import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../../src/js/game/index.js';


it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
})
