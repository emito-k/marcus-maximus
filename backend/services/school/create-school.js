const { School, Role, Member } = require("../../data-access/sequalize");

async function createSchool(req, res) {
  try {
    const user = req.user;

    const { school_name, description, thumbail_url } = req.body;

    // Create the School
    const school = await School.create({
      school_name: school_name ?? "School Name",
      description: description ?? "Description",
      thumbail_url: thumbail_url ?? "https://via.placeholder.com/150",
      owner_user_id_fk: user.id,
    });

    // Create
    const role = await Role.create({
      name: "Member",
      description: "A member of the school.",
      school_id_fk: school.id,
    });

    res.status(201).send(school);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the school.");
  }
}

module.exports = createSchool;
