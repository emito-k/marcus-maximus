const {
  PermissionRole,
  Permission,
  Role,
} = require("../../data-access/sequalize");

async function getPermissionRoles(req, res) {
  try {
    const { role_id, permission_id } = req.query;

    const filter = {};

    if (role_id) {
      filter.role_id_fk = role_id;
    }

    if (permission_id) {
      filter.permission_id_fk = permission_id;
    }

    const permissionRoles = await PermissionRole.findAll({
      where: filter,
      include: [
        {
          model: Permission,
          as: "Permission",
        },
        {
          model: Role,
          as: "Role",
        },
      ],
    });
    res.status(200).json(permissionRoles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getPermissionRoles;
