const { Role } = require("../../data-access/sequalize");

async function deleteRole(req, res) {
  try {
    const user = req.user;
    const { id } = req.body;

    // Check if the role exists
    const role = await Role.findOne({
      where: { id },
    });

    if (!role) {
      return res.status(404).send("Role not found.");
    }

    // Delete the role
    await role.destroy();

    res.status(200).send("Role deleted successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the role.");
  }
}

module.exports = deleteRole;
