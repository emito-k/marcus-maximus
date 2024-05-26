const { Audit } = require("../../data-access/sequelize");

async function createAudit({ user_id, activity_type, description }) {
  try {
    const audit = await Audit.create({
      user_id_fk: user_id,
      activity_type,
      description,
      timestamp: new Date(),
    });
    return audit;
  } catch (error) {
    throw error;
  }
}
