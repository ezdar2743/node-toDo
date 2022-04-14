const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("take task");
});
router.post("/", (req, res) => {
  res.send("make new task");
});

router.get("/:id", (req, res) => {
  res.send("id task");
});

router.patch("/:id", (req, res) => {
  res.send("change id task");
});

router.delete("/:id", (req, res) => {
  res.send("delete id task");
});

module.exports = router;
