const { Module } = require("../../data-access/sequalize");

async function updateModule(req, res) {
  try {
    // const { id } = req.query;
    const { name, description, credits, department, id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Module id is required" });
    }

    const module = await Module.findOne({
      where: {
        id,
      },
    });

    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }

    module.name = name ?? module.name;
    module.description = description ?? module.description;
    module.credits = credits ?? module.credits;
    module.department = department ?? module.department;

    await module.save();

    res.status(200).send(module);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = updateModule;
