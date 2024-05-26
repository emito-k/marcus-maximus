const {
  PermissionRole,
  Permission,
  Role,
} = require("../../data-access/sequalize");

async function updatePermissionRole(req, res) {
  res.status(501).send({ error: "Not Implemented" });
}

module.exports = updatePermissionRole;
