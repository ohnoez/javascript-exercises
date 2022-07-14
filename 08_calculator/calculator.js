const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let summ = 0;
  array.forEach(el => {
    summ += el;
  });
  return summ;
};

const multiply = function (array) {
  let mul = 1;
  array.forEach(el => {
    mul *= el;
  });
  return mul;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let fact = a;
  if (a == 0 || a == 1) {
    return 1;
  } else {
    while (a > 1){
      a--;
      fact = fact * a;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
