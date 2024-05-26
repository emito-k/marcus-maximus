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

    //   school_name: string;
    // school_id: string;
    // description: string;
    // thumbnail_url: string;
    // profile_url: string;
    // enrolled: boolean;

    const schools = await School.findAll({
      where: filters,
      attributes: [
        "school_name",
        ["id", "school_id"],
        "description",
        ["thumbail_url", "thumbnail_url"],
      ],
    });

    if (schools.length === 0) {
      return res.status(404).send({
        message: "No schools found",
        success: false,
        data: [],
      });
    }

    res.status(200).send({
      message: "Schools retrieved successfully",
      success: true,
      data: schools,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "An error occurred while retrieving schools.",
      success: false,
    });
  }
}

module.exports = getSchools;
