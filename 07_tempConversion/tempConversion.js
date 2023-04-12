const convertToCelsius = function(x) {
      //take (arg subtract 32 ) multiply (5/9);
      let convertedToC = (x -32) * (5/9);
      let rounded = Math.round(convertedToC * 10 ) /10;
      return rounded;
};

const convertToFahrenheit = function(x) {
    //formula: ( x * (9/5)) + 32
    let conversion = (x * (9/5)) + 32;
    return rounded = Math.round(conversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
