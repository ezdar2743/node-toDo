const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());
app.use(express.static("./public"));
const PORT = 3000;
// root set up
app.use("/api/v1/tasks", taskRoute);

//db connect
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("server on"));
  } catch (err) {
    console.log(err);
  }
};

start();
