const fs = require("fs");

setImmediate(() => {
  console.log("set immediate run ");
});

setTimeout(() => {
  console.log("setTimeout run within 0 sec");
}, 0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => {
    console.log(" 2- setTimeout run within 0 sec");
  }, 0);

  process.nextTick(() => {
    console.log("2- process.nextTick happened here ");
  });

  setImmediate(() => {
    console.log("2- set immediate run ");
  });

  console.log("File read successfully !!!");
});

process.nextTick(() => {
  console.log("process.nextTick happened here ");
});

console.log("Last line of the code !!!");
