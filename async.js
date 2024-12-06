var fs = require("fs");
var http = require("https");

var a = 321;
var b = 987;

console.log("Async code is here ");

setTimeout(() => {
    console.log("setTimeout function run after 5t sec");
}, 5000);

fs.readFile("./file.txt", "utf-8", ( err,data) => {
    console.log("file data :", data);
})

function multi(a, b) {
  var result = a * b;
  console.log(result);
}

multi(a, b);
