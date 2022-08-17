const repeatString = function (string, repeats) {
  if (repeats < 0) return "ERROR";

  const result = [];
  for (let i = 0; i < repeats; i++) {
    result.push(string);
  }
  return result.join("");
};

// Do not edit below this line
module.exports = repeatString;
