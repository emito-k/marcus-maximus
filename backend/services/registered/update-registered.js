const { Registered } = require("../../data-access/sequalize");

async function updateRegistered(req, res) {
  try {
    const { id, member_id, module_id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Registered id is required" });
    }

    const registered = await Registered.findOne({
      where: {
        id,
      },
    });

    if (!registered) {
      return res.status(404).json({ error: "Registered not found" });
    }

    if (member_id) {
      registered.member_id_fk = member_id;
    }

    if (module_id) {
      registered.module_id_fk = module_id;
    }

    await registered.save();

    res.status(200).json(registered);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateRegistered;
