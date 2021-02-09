const fs = require("fs");

fs.promises
  .writeFile("./writeme.txt", "WORD")
  .then(() => {
    return fs.promises.readFile("./writeme.txt");
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
