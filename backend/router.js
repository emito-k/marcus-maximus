const express = require("express");
const { createUser, updateUser } = require("./services");

const router = express.Router();

router.get("/helloworld", (req, res) => {
  res.send("Hello world!");
});

router.post("/user", createUser);
router.put("/user", updateUser);

module.exports = router;
