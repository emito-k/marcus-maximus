// delete-school.js
const { School } = require("../../data-access/sequalize");

async function deleteSchool(req, res) {
  try {
    const user = req.user;
    const { id } = req.query;

    // Check if the school exists
    const school = await School.findOne({
      where: { id },
    });

    if (!school) {
      return res.status(404).send("School not found.");
    }

    if (school.owner_user_id_fk !== user.id) {
      return res
        .status(403)
        .send("You are not authorized to delete this school.");
    }

    // Delete the school
    await school.destroy();

    res.status(200).send("School deleted successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the school.");
  }
}

module.exports = deleteSchool;
