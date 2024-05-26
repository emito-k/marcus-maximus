// get-members.js
const { Member, User, School, Role } = require("../../data-access/sequalize");
const { Op } = require("sequelize");

async function getMembers(req, res) {
  try {
    const { id, school_id, role_id, user_id } = req.query;

    let filter = {};

    if (id) {
      filter.id = id;
    }

    if (school_id) {
      filter.school_id_fk = school_id;
    }

    if (role_id) {
      filter.role_id_fk = role_id;
    }

    if (user_id) {
      filter.user_id_fk = user_id;
    }

    const members = await Member.findAll({
      where: filter,
      include: [
        {
          model: User,
          as: "User",
          attributes: ["id", "username", "email", "first_name", "last_name"],
        },
        {
          model: Role,
          as: "Role",
          attributes: ["id", "name", "description"],
        },
        {
          model: School,
          as: "School",
          attributes: ["id", "school_name"],
        },
      ],
    });

    if (members.length === 0) {
      return res.status(404).send({
        message: "No members found",
        success: true,
        data: [],
      });
    }

    res.status(200).send({
      message: "Members retrieved successfully",
      success: true,
      data: members,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "An error occurred while retrieving members.",
      success: false,
    });
  }
}

module.exports = getMembers;
