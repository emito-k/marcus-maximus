const { Permission } = require("../../data-access/sequalize");

async function deletePermission(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Permission id is required" });
    }

    await Permission.destroy({
      where: {
        id,
      },
    });

    res.status(204).send({
      message: "Permission deleted",
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = deletePermission;
