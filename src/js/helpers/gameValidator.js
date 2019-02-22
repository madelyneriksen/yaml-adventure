// Validator function for checking games.


export default function validateGame(game) {
  const keys = Object.keys(game);
  if (!keys.includes("start")) {
    return [false, game];
  }
  for (var i = 0;i<keys.length;i++) {
    var key = keys[i];
    if (typeof game[key].text !== 'string') {
      return [false, game];
    };
    if (Array.isArray(game[key].options)) {
      var options = game[key].options;
      for (var x = 0;x<options.length;x++) {
        var option = options[x];
        if (!(typeof option.text === 'string' && keys.includes(option.location))) {
          return [false, game];
        };
      };
    };
  };
  return [true, game]
};
