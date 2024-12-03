const fs = require("fs");
const a = 100;

setImmediate(() => {
  console.log("set immediate run ");
});
Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File read successfully !!!");
});
setTimeout(() => {
  console.log("setTimeout run within 0 sec");
}, 0);

process.nextTick(() => {
  console.log("process.nextTick happened here ");
});

function printA() {
  console.log("A=>", a);
}

printA();
console.log("This is the last line of program");
