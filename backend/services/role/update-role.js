const { Role } = require("../../data-access/sequalize");

async function updateRole(req, res) {
  try {
    const user = req.user;
    const { id, name, description } = req.body;

    // Check if the role exists
    const role = await Role.findOne({
      where: { id },
    });

    if (!role) {
      return res.status(404).send("Role not found.");
    }

    if (role.owner_user_id_fk !== user.id) {
      return res
        .status(403)
        .send("You are not authorized to update this role.");
    }

    // Update the role
    await role.update({
      name: name ?? role.name,
      description: description ?? role.description,
    });

    res.status(200).send("Role updated successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the role.");
  }
}

module.exports = updateRole;
