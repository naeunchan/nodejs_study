const fs = require("fs").promises;

//비동기 순서대로 출력하기
//promises

console.log("start");

fs.readFile("./readme.txt")
  .then((data) => {
    console.log(1, data.toString());
    return fs.readFile("./readme.txt");
  })
  .then((data) => {
    console.log(2, data.toString());
    return fs.readFile("./readme.txt");
  })
  .then((data) => {
    console.log(3, data.toString());
    console.log("end");
  })
  .catch((err) => {
    console.error(err);
  });
