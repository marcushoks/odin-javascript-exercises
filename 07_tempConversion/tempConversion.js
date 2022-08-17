const round1DP = (num) => {
  return Math.round(num * 10) / 10;
};

const ftoc = function (fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9;
  return round1DP(celcius);
};

const ctof = function (celcius) {
  let fahrenheit = (celcius * 9) / 5 + 32;
  return round1DP(fahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
