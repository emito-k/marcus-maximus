const express = require("express");
const {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
  getSchools,
  createSchool,
  updateSchool,
  deleteSchool,
  createRole,
  getRoles,
  updateRole,
  deleteRole,
  createModule,
  updateModule,
  getModules,
  deleteModule,
  createMember,
  updateMember,
  getMembers,
  deleteMember,
  getRegistered,
  createRegister,
  updateRegistered,
  deleteRegistered,
  createPermission,
  updatePermission,
  getPermissions,
  deletePermission,
  createPermissionRole,
  getPermissionRoles,
  deletePermissionRole,
  updatePermissionRole,
} = require("./services");
const { User } = require("./data-access/sequalize");

const router = express.Router();

// add middleware to find the bearer token inside header and use it to find user
router.use(async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).send("Unauthorized");
  }

  // console.log("Bearer: ", bearerToken);
  const token = bearerToken.split(" ")[1];
  // find user by bearer token, the token is the user id
  const user = await User.findByPk(token);
  req.user = user;

  if (!user) {
    return res.status(404).send("User not found.");
  }

  console.log("User found: ", user.toJSON());
  next();
});

router.get("/helloworld", (req, res) => {
  res.send("Hello world!");
});

router.post("/user", createUser);
router.put("/user", updateUser);
router.get("/user", getUsers);
router.delete("/user", deleteUser);

router.post("/school", createSchool);
router.get("/school", getSchools);
router.put("/school", updateSchool);
router.delete("/school", deleteSchool);

router.post("/role", createRole);
router.get("/role", getRoles);
router.put("/role", updateRole);
router.delete("/role", deleteRole);

router.post("/module", createModule);
router.get("/module", getModules);
router.put("/module", updateModule);
router.delete("/module", deleteModule);

router.post("/member", createMember);
router.get("/member", getMembers);
router.put("/member", updateMember);
router.delete("/member", deleteMember);

router.post("/register", createRegister);
router.get("/register", getRegistered);
router.put("/register", updateRegistered);
router.delete("/register", deleteRegistered);

router.post("/permission", createPermission);
router.get("/permission", getPermissions);
router.put("/permission", updatePermission);
router.delete("/permission", deletePermission);

router.post("/permission-role", createPermissionRole);
router.get("/permission-role", getPermissionRoles);
router.put("/permission-role", updatePermissionRole);
router.delete("/permission-role", deletePermissionRole);

module.exports = router;
