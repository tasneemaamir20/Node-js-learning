const fs = require("fs");

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
    process.nextTick(() => console.log("inner nextTick"));
  console.log("process.nextTick happened here ");
});


console.log("Last line of the program");