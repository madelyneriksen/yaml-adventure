import React from 'react';
import ErrorBox from './error-box.js';
import { safeLoad } from 'js-yaml';


export default class GameUploader extends React.Component {

  constructor(props) {
    super(props);
    this.readUpload = this.readUpload.bind(this);
    this.parseUpload = this.parseUpload.bind(this);
  }

  readUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.parseUpload;
      reader.readAsText(file);
    }
  }

  parseUpload(event) {
    var raw = String(event.target.result);
    try {
      var uploadedGame = safeLoad(raw);
      this.props.swapGame(uploadedGame);
    } catch (e) {
      console.log(e);
    };
  };

  render() {
    return (
      <div className="game__uploader">
        <label className="game__uploader__label">
          <input type="file" className="game__uploader__input" onChange={this.readUpload} />
          Upload a Game
        </label>
        <button className="game__button--secondary" onClick={this.props.loadDefault}>
          Or load the example game
        </button>
        <ErrorBox error={this.props.error} />
    </div>
    )
  }
}
