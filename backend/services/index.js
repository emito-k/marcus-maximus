const createUser = require("./user/create-user");
const updateUser = require("./user/update-user");
const getUsers = require("./user/get-users");
const deleteUser = require("./user/delete-user");
const createSchool = require("./school/create-school");
// const updateSchool = require("./school/update-school");
const getSchools = require("./school/get-schools");

module.exports = {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
  createSchool,
  // updateSchool,
  getSchools,
};
