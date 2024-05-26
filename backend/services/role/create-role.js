const { Role } = require("../../data-access/sequalize");

async function createRole(req, res) {
  try {
    const { name, description, school_id } = req.body;

    // Create the Role
    const role = await Role.create({
      name: name ?? "Role Name",
      description: description ?? "Description",
      school_id_fk: school_id,
    });

    res.status(201).send(role);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the role.");
  }
}

module.exports = createRole;
