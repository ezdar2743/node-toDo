const express = require("express");
const app = express();
const PORT = 3000;

app.get("/api/v1/tasks", (req, res) => {
  res.send("take task");
});
app.post("/api/v1/tasks", (req, res) => {
  res.send("make new task");
});

app.get("/api/v1/tasks/:id", (req, res) => {
  res.send("id task");
});

app.patch("/api/v1/tasks/:id", (req, res) => {
  res.send("change id task");
});

app.patch("/api/v1/tasks/:id", (req, res) => {
  res.send("delete id task");
});

app.listen(PORT, console.log("server on"));
