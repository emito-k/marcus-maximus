const { Member } = require("../../data-access/sequalize");

async function deleteMember(req, res) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Member id is required" });
    }

    await Member.destroy({
      where: {
        id,
      },
    });

    res.status(204).send({
      message: "Member deleted",
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = deleteMember;
