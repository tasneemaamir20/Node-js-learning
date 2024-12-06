const crypto = require("node:crypto");

// pbkdf2=> password Base Key Deravtive function
//  Syncchronous function / blocking function
crypto.pbkdf2Sync("password", "salt", 5000000, 10, "sha512");
    console.log(" First key is generated");



//  setTimeout function

setTimeout(() => {
    console.log("call me asap");
}, 0);
// Asynchronous function 
crypto.pbkdf2("password", "salt", 5000, 10, "sha512", (err, key) => {
    console.log("Second key is generated",key);
});


function multi(a, b) {
    console.log(a * b);
}
multi(20, 30);