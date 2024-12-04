const fs = require("fs");

const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 3;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1 - crypto done ");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2 - crypto done ");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3 - crypto done ");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4 - crypto done ");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("1- File read successfully !!!");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("2 - File read successfully !!!");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("3 - File read successfully !!!");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("4 - File read successfully !!!");
});

fs.readFile("./file.txt", "utf8", () => {
  console.log("5 - File read successfully !!!");
});
