const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "ERROR";
  if (a < 0 || b < 0) return "ERROR";

  let start;
  let end;
  if (a >= b) {
    start = b;
    end = a;
  } else {
    start = a;
    end = b;
  }

  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
