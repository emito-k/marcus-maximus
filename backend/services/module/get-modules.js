const { Module } = require("../../data-access/sequalize");
const { Op } = require("sequelize");

async function getModules(req, res) {
  try {
    const { id, school_id, name, credits, department, description } = req.query;

    // if (!school_id) {
    //     return res.status(400).json({ error: "School id is required" });
    // }

    const filters = {};

    if (id) {
      filters.id = id;
    }

    if (school_id) {
      filters.school_id_fk = school_id;
    }

    if (name) {
      filters.name = {
        [Op.like]: `%${name}%`,
      };
    }

    if (credits) {
      filters.credits = credits;
    }

    if (department) {
      filters.department = {
        [Op.like]: `%${department}%`,
      };
    }

    if (description) {
      filters.description = {
        [Op.like]: `%${description}%`,
      };
    }

    const modules = await Module.findAll({
      where: filters,
      attributes: [
        ["id", "module_id"],
        ["school_id_fk", "school_id"],
        ["name", "module_name"],
        "description",
        "credits",
      ],
    });

    res.status(200).json({
      data: modules,
      success: true,
      message: "Modules fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      message: "Failed to fetch modules",
    });
  }
}

module.exports = getModules;
