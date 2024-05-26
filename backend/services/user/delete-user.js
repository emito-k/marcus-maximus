const { User } = require("../../data-access/sequalize");

async function deleteUser(req, res) {
  try {
    const { id } = req.query;

    const user = await User.findOne({
      where: { id },
    });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    await user.destroy();

    res.status(200).send("User deleted successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the user.");
  }
}

module.exports = deleteUser;
