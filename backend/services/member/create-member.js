const { Member, User, Role, School } = require("../../data-access/sequalize");

async function createMember(req, res) {
  try {
    const { user_id, role_id, school_id } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: "User id is required" });
    }
    // else {
    console.log("User id: ", user_id);
    const user = await User.findOne({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // }

    if (!role_id) {
      return res.status(400).json({ error: "Role id is required" });
    }
    // else {
    const role = await Role.findOne({
      where: {
        id: role_id,
      },
    });

    if (!role) {
      return res.status(404).json({ error: "Role not found" });
    }
    // }

    if (!school_id) {
      return res.status(400).json({ error: "School id is required" });
    }
    // else {
    const school = await School.findOne({
      where: {
        id: school_id,
      },
    });

    if (!school) {
      return res.status(404).json({ error: "School not found" });
    }
    // }

    const member = await Member.create({
      user_id_fk: user.id,
      role_id_fk: role.id,
      school_id_fk: school.id,
    });

    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createMember;
