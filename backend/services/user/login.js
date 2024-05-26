const { User } = require("../../data-access/sequalize");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send({
        message: "Invalid password or email",
        status: "error",
      });
    }

    if (user.password !== password) {
      return res.status(401).send({
        message: "Invalid password or email",
        status: "error",
      });
    }

    res.status(200).send({
      message: "Login successful",
      success: true,
      data: { ...user.toJSON(), token: user.id },
    });
  } catch (error) {
    // console.error(error);
    res.status(500).send({
      message: "An error occurred while logging in.",
      success: false,
    });
  }
}

module.exports = login;
