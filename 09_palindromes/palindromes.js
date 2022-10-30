const palindromes = function (str) {
  const strToCompare = str
    .toLowerCase()
    .split("")
    .filter((char) => char.match(/[a-z]/));

  const reversed = [...strToCompare].reverse();

  return strToCompare.join("") === reversed.join("");
};

// Do not edit below this line
module.exports = palindromes;
