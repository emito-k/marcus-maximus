const { Module } = require("../../data-access/sequalize");

async function createModule(req, res) {
  try {
    const { name, description, credits, department, school_id } = req.body;

    if (!school_id) {
      return res.status(400).json({ error: "School id is required" });
    }

    const module = await Module.create({
      name: name ?? "School module",
      description: description ?? "School module description",
      credits: credits ?? 0,
      department: department ?? "School department",
      school_id_fk: school_id,
    });

    res.status(201).json(module);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createModule;
