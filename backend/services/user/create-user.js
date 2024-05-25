const { User } = require("../../data-access/sequalize");

async function createUser(req, res) {
  try {
    const { username, password, email, first_name, last_name } = req.body;

    const user = await User.create({
      username,
      password,
      email,
      first_name,
      last_name,
      date_created: new Date(),
      last_login: new Date(),
    });

    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the user.");
  }
}

module.exports = createUser;
