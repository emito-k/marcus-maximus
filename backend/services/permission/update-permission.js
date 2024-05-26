const { Permission } = require("../../data-access/sequalize");

async function updatePermission(req, res) {
  try {
    // const { id } = req.query;
    const { name, description, id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Permission id is required" });
    }

    // get the permission
    const permission = await Permission.findOne({
      where: {
        id,
      },
    });

    if (!permission) {
      return res.status(404).json({ error: "Permission not found" });
    }

    if (name) {
      permission.name = name;
    }

    if (description) {
      permission.description = description;
    }

    await permission.save();

    res.status(200).json(permission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updatePermission;
