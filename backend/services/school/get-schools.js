const { School } = require("../../data-access/sequalize");

async function getSchools(req, res) {
  try {
    const filters = {};
    const { uid } = req.query;

    const { owner_user_id_fk, school_name, description } = req.query;

    if (uid) {
      filters.id = uid;
    }
    if (owner_user_id_fk) {
      filters.owner_user_id_fk = owner_user_id_fk;
    }
    if (school_name) {
      filters.school_name = {
        [Sequelize.Op.like]: `%${school_name}%`,
      };
    }
    if (description) {
      filters.description = {
        [Sequelize.Op.like]: `%${description}%`,
      };
    }

    const schools = await School.findAll({
      where: filters,
    });

    if (schools.length === 0) {
      return res.status(404).send("No schools found.");
    }

    res.status(200).send(schools);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving the schools.");
  }
}

module.exports = getSchools;
