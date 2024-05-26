const { Role } = require("../../data-access/sequalize");

async function getRoles(req, res) {
  try {
    // make use of filters
    const filters = {};

    const { school_id } = req.query;

    if (school_id) {
      filters.school_id_fk = school_id;
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
