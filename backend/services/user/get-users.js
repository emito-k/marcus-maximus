const { User } = require("../../data-access/sequalize");
const { Op } = require("sequelize");

async function getUsers(req, res) {
  try {
    const { username, email, first_name, last_name, date_created, last_login } =
      req.query;

    const filters = {};

    if (username) filters.username = { [Op.like]: `%${username}%` };
    if (email) filters.email = { [Op.like]: `%${email}%` };
    if (first_name) filters.first_name = { [Op.like]: `%${first_name}%` };
    if (last_name) filters.last_name = { [Op.like]: `%${last_name}%` };
    if (date_created)
      filters.date_created = { [Op.eq]: new Date(date_created) };
    if (last_login) filters.last_login = { [Op.eq]: new Date(last_login) };

    const users = await User.findAll({
      where: filters,
    });

    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching users.");
  }
}

module.exports = getUsers;
