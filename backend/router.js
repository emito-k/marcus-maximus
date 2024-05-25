const express = require("express");
const { createUser, updateUser, getUsers } = require("./services");

const router = express.Router();

router.get("/helloworld", (req, res) => {
  res.send("Hello world!");
});

router.post("/user", createUser);
router.put("/user", updateUser);
router.get("/user", getUsers);

module.exports = router;
