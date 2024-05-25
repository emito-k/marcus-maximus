const express = require("express");
const { createUser } = require("./services");

const router = express.Router();

router.get("/helloworld", (req, res) => {
  res.send("Hello world!");
});

router.post("/users", createUser);

module.exports = router;
