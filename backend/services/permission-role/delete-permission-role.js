const { PermissionRole } = require("../../data-access/sequalize");

async function deletePermissionRole(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "PermissionRole id is required" });
    }

    await PermissionRole.destroy({
      where: {
        id,
      },
    });

    res.status(204).send({
      message: "Permission Role deleted",
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = deletePermissionRole;
