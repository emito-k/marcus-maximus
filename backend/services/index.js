const createUser = require("./user/create-user");
const updateUser = require("./user/update-user");
const getUsers = require("./user/get-users");
const deleteUser = require("./user/delete-user");
const createSchool = require("./school/create-school");
const updateSchool = require("./school/update-school");
const getSchools = require("./school/get-schools");
const deleteSchool = require("./school/delete-school");
const createRole = require("./role/create-role");
const getRoles = require("./role/get-roles");
const deleteRole = require("./role/delete-role");
const updateRole = require("./role/update-role");
const createModule = require("./module/create-module");
const updateModule = require("./module/update-module");
const getModules = require("./module/get-modules");
const deleteModule = require("./module/delete-module");
const createMember = require("./member/create-member");
const updateMember = require("./member/update-member");
const getMembers = require("./member/get-members");
const deleteMember = require("./member/delete-member");

module.exports = {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
  createSchool,
  updateSchool,
  getSchools,
  deleteSchool,
  createRole,
  getRoles,
  deleteRole,
  updateRole,
  createModule,
  updateModule,
  getModules,
  deleteModule,
  createMember,
  updateMember,
  getMembers,
  deleteMember,
};
