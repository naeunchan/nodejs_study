const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");
writeStream.on("finish", () => {
  console.log("end");
});

writeStream.write("again\n");
writeStream.write("one more");
writeStream.end();
