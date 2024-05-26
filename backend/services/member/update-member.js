const { Member } = require("../../data-access/sequalize");

async function updateMember(req, res) {
  try {
    const { id, user_id, role_id, school_id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Member id is required" });
    }

    const member = await Member.findOne({
      where: {
        id,
      },
    });

    if (!member) {
      return res.status(404).json({ error: "Member not found" });
    }

    if (user_id) {
      member.user_id_fk = user_id;
    }

    if (role_id) {
      member.role_id_fk = role_id;
    }

    if (school_id) {
      member.school_id_fk = school_id;
    }

    await member.save();

    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateMember;
