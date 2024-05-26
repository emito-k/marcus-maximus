const { Registered, Member, Module } = require("../../data-access/sequalize");

async function createRegister(req, res) {
  try {
    const { member_id, module_id } = req.body;

    if (!member_id) {
      return res.status(400).json({ error: "Member id is required" });
    }

    // check if member exists
    const member = await Member.findOne({
      where: {
        id: member_id,
      },
    });

    if (!member) {
      return res.status(404).json({ error: "Member not found" });
    }

    if (!module_id) {
      return res.status(400).json({ error: "Module id is required" });
    }

    // check if module exists
    const module = await Module.findOne({
      where: {
        id: module_id,
      },
    });

    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }

    const register = await Registered.create({
      member_id_fk: member.id,
      module_id_fk: module.id,
    });

    res.status(201).json(register);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createRegister;
