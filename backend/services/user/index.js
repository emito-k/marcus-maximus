// this was an experiment to see if I could make the routes more modular

const express = require("express");
const router = express.Router();

const { createUser } = require("./create-user");
const { updateUser } = require("./update-user");
const { getUsers } = require("./get-users");
const { deleteUser } = require("./delete-user");

router.post("/", createUser);
router.put("/", updateUser);
router.get("/", getUsers);
router.delete("/", deleteUser);

module.exports = router;
