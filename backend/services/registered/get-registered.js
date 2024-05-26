const {
  Registered,
  Member,
  Module,
  User,
  School,
  Role,
} = require("../../data-access/sequalize");

async function getRegistered(req, res) {
  try {
    const { id, member_id, module_id } = req.query;

    const filter = {};

    if (id) {
      filter.id = id;
    }

    if (member_id) {
      filter.member_id_fk = member_id;
    }

    if (module_id) {
      filter.module_id_fk = module_id;
    }

    const registered = await Registered.findAll({
      where: filter,
      include: [
        {
          model: Member,
          as: "Member",
          attributes: ["id"],
          include: [
            {
              model: User,
              as: "User",
              attributes: [
                "id",
                "username",
                "email",
                "first_name",
                "last_name",
              ],
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
        },
        {
          model: Module,
          as: "Module",
          attributes: ["id", "name", "credits", "department", "description"],
        },
      ],
    });

    res.status(200).json(registered);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = getRegistered;
