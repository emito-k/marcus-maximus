const { User } = require("../../data-access/sequalize");

async function updateUser(req, res) {
  try {
    const { id, username, password, email, first_name, last_name } = req.body;

    // check if the user exists
    const user = await User.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(404).send("User not found.");
    }

    // update the user
    user.username = username ?? user.username;
    user.password = password ?? user.password;
    user.email = email ?? user.email;
    user.first_name = first_name ?? user.first_name;
    user.last_name = last_name ?? user.last_name;

    await user.save();

    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the user.");
  }
}

module.exports = updateUser;
