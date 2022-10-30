const fibonacci = function (num) {
  const parsed = parseInt(num);
  if (parsed <= 0) return "OOPS";
  if (parsed === 1 || parsed === 2) return 1;
  else return fibonacci(parsed - 1) + fibonacci(parsed - 2);
};

// Do not edit below this line
module.exports = fibonacci;
