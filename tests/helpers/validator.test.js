// Test the validator function
import validator from '../../src/js/helpers/gameValidator.js';


it("Marks games missing start locations as invalid", () => {
  const badGameState = {
    "notStart": {
      "text": "There is no start!",
      "options": []
    }
  };
  var [isValid, game, err] = validator(badGameState);
  expect(isValid).toEqual(false);
})

it("Returns error messages as a string.", () => {
  const badGameState = {
    "notStart": {
      "text": "There is no start!",
      "options": []
    }
  };
  var [isValid, game, err] = validator(badGameState);
  expect(typeof err).toEqual("string");
})

it("Marks location text that isn't a string as invalid", () => {
  const badGameState = {
    "start": {
      "text": 7,
      "options": []
    }
  };
  var [isValid, game, err] = validator(badGameState);
  expect(isValid).toEqual(false);
})

it("Marks option text that isn't a string as invalid", () => {
  const badGameState = {
    "start": {
      "text": "Some good text",
      "options": [
        {
          "text": 7,
          "location": "start",
        }
      ]
    }
  };
  var [isValid, game, err] = validator(badGameState);
  expect(isValid).toEqual(false);
})

it("Marks missing locations as invalid", () => {
  const badGameState = {
    "start": {
      "text": "Some good text",
      "options": [
        {
          "text": "Some more good text",
          "location": "badPlace",
        }
      ]
    }
  };
  var [isValid, game, err] = validator(badGameState);
  expect(isValid).toEqual(false);
})

it("Marks improper option type as invalid", () => {
  const badGameState = {
    "start": {
      "text": "Some good text",
      "options": 7
    }
  };
  var [isValid, game, err] = validator(badGameState);
  expect(isValid).toEqual(false);
})

it("Marks malformed options as invalid", () => {
  const badGameState = {
    "start": {
      "text": "Some good text",
      "options": [
        {
          "text": "There is no location prop."
        }
      ]
    }
  };
  var [isValid, game, err] = validator(badGameState);
  expect(isValid).toEqual(false);
})

it("Marks improper game types as invalid", () => {
  const badGameState = ["badArray"];
  var [isValid, game, err] = validator(badGameState);
  expect(isValid).toEqual(false);
})
