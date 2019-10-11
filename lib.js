//Testing numbers -- includes code refactor (ternary Operator)
module.exports.absolute = function(number) {
  //   if (number > 0) return number;
  //   if (number < 0) return -number;
  //   return 0;

  //Using ternary Operator
  return number >= 0 ? number : -number;
};

//Test Strings
module.exports.greet = function(name) {
  return "welcome " + name;
};

//Test Array
module.exports.getCurrencies = function() {
  return ["USD", "AUR", "EUR"];
};
