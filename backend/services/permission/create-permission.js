const { Permission } = require("../../data-access/sequalize");

async function createPermission(req, res) {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Permission name is required" });
    }

    const permission = await Permission.create({
      name,
      description,
    });

    res.status(201).json(permission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createPermission;
