const { Audit } = require("../../data-access/sequelize");

async function getAudits(req, res) {
  try {
    const audits = await Audit.findAll();
    res.status(200).json(audits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getAudits;
