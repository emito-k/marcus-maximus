const { School } = require("../../data-access/sequalize");

async function updateSchool(req, res) {
  try {
    const { school_name, description, thumbail_url } = req.body;

    // Check if the school exists
    const school = await School.findOne({
      where: { id },
    });

    const user = req.user;

    if (school.owner_user_id_fk !== user.id) {
      return res
        .status(403)
        .send("You are not authorized to update this school.");
    }

    if (!school) {
      return res.status(404).send("School not found.");
    }

    // Update the school
    // school.owner_user_id_fk = owner_user_id_fk ?? school.owner_user_id_fk;
    school.school_name = school_name ?? school.school_name;
    school.description = description ?? school.description;
    school.thumbail_url = thumbail_url ?? school.thumbail_url;

    await school.save();

    res.status(200).send(school);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the school.");
  }
}

module.exports = updateSchool;
