// Validator function for checking games.


export default function validateGame(game) {
  try {
    const keys = Object.keys(game);
    if (!keys.includes("start")) {
      throw 'YAML games need a "start" event.'
    }
    keys.forEach((key) => {
      if (typeof game[key].text !== 'string') {
        throw `${key} "text" property is not a valid string!`
      };
      if (Array.isArray(game[key].options)) {
        var options = game[key].options;
        options.forEach((option) => {
          if (typeof option.text !== 'string') {
            throw `${key} - option "text" is not a valid string!`
          } else if (!keys.includes(option.location)) {
            throw `Location ${option.location} is in ${key} but not present in game!`
          }
        });
      } else {
        throw `${key} "options" property is not a valid array.`
      }
    });
  } catch(error) {
    return [false, game, error];
  };
  return [true, game, ''];
};
