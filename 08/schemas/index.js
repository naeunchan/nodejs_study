const mongoose = require("mongoose");

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }

  mongoose.connect(
    "mongodb://admin:1234@localhost:27017/admin",
    {
      dbName: "nodejs",
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.log("mongodb connection error", error);
      } else {
        console.log("mongodb connection success");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("mongodb connection error", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("mongodb disconnected. retrying...");
  connect();
});

module.exports = connect;
