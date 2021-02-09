const fs = require("fs");

//동기-블로킹 방식

console.log("start");

let data = fs.readFileSync("./readme.txt");
console.log(1, data.toString());
data = fs.readFileSync("./readme.txt");
console.log(2, data.toString());
data = fs.readFileSync("./readme.txt");
console.log(3, data.toString());

console.log("end");
