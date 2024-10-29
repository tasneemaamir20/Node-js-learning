require("./xyz.js");

// const { x, calculateSum } = require("./calculate/Sum.js");

const {
  calculateSum,
  calculateMultiply,
  subtract,
  divide,
} = require("./calculate");

const data = require("./data.json");

var a = "Tasneem aamir";
var b = 10;
var c = 20;
// console.log(a);
// console.log(b + c);

// console.log(globalThis === global);
// console.log(global);
// console.log(this);                          //Empty object and this act as a global in browser
// console.log(self);                           // self is not found in node runtime and found in browser
// console.log(frames);                            frames is not found in node runtime and found in browser

calculateSum(b, c);
calculateMultiply(b, c);
subtract(b, c);
divide(b, c);
console.log(data);
// console.log(x);
