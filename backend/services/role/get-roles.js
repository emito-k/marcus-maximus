const { Role } = require("../../data-access/sequalize");
const { Op } = require("sequelize");

async function getRoles(req, res) {
  try {
    // make use of filters
    const filters = {};

    const { school_id, id, name, description } = req.query;

    if (school_id) {
      filters.school_id_fk = school_id;
    }

    if (id) {
      filters.id = id;
    }

    if (name) {
      filters.name = {
        [Op.like]: `%${name}%`,
      };
    }

    if (description) {
      filters.description = {
        [Op.like]: `%${description}%`,
      };
    }

    const roles = await Role.findAll({
      where: filters,
    });

    res.status(200).send(roles);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while getting roles.");
  }
}

module.exports = getRoles;
