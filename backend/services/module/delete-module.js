const { Module } = require("../../data-access/sequalize");

async function deleteModule(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Module id is required" });
    }

    await Module.destroy({
      where: {
        id,
      },
    });

    res.status(204).send({
      message: "Module deleted",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteModule;
