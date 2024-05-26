const {
  PermissionRole,
  Permission,
  Role,
} = require("../../data-access/sequalize");

async function createPermissionRole(req, res) {
  try {
    const { permission_ids, role_id } = req.body;

    if (!permission_ids) {
      return res.status(400).json({ error: "Permission ids are required" });
    }

    if (!role_id) {
      return res.status(400).json({ error: "Role id is required" });
    }

    const role = await Role.findOne({
      where: {
        id: role_id,
      },
    });

    if (!role) {
      return res.status(404).json({ error: "Role not found" });
    }

    // clear all permissions for the role
    await PermissionRole.destroy({
      where: {
        role_id_fk: role.id,
      },
    });

    const permissionRoles = [];

    for (let i = 0; i < permission_ids.length; i++) {
      const permission = await Permission.findOne({
        where: {
          id: permission_ids[i],
        },
      });

      if (!permission) {
        return res.status(404).json({ error: "Permission not found" });
      }

      const permissionRole = await PermissionRole.create({
        permission_id_fk: permission.id,
        role_id_fk: role.id,
      });

      permissionRoles.push(permissionRole);
    }

    res.status(201).json({
      message: "Permission Role created successfully",
      permissionRoles,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createPermissionRole;
