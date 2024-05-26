const { Permission } = require("../../data-access/sequalize");

async function getPermissions(req, res) {
  try {
    const permissions = await Permission.findAll();
    res.status(200).json(permissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getPermissions;
