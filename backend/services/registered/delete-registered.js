const { Registered } = require("../../data-access/sequalize");

async function deleteRegistered(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Registered id is required" });
    }

    await Registered.destroy({
      where: {
        id,
      },
    });

    res.status(204).send({
      message: "Registered deleted",
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = deleteRegistered;
