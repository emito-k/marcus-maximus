const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

// Define models
const Profile = sequelize.define(
  "Profile",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    profile_picture_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id_fkd: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "Profile",
  }
);

const Member = sequelize.define(
  "Member",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    role_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    school_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "Member",
  }
);

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "User",
  }
);

const Audit = sequelize.define(
  "Audit",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    activity_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "Audit",
  }
);

const Module = sequelize.define(
  "Module",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    school_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    credits: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "Module",
  }
);

const Registered = sequelize.define(
  "Registered",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    student_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    module_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "Registered",
  }
);

const Role = sequelize.define(
  "Role",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    school_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "Role",
  }
);

const School = sequelize.define(
  "School",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    owner_user_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    school_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    thumbail_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "School",
  }
);

const PermissionRole = sequelize.define(
  "PermissionRole",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    role_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    permission_id_fk: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: "Permission-Role",
  }
);

const Permission = sequelize.define(
  "Permission",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "Permission",
  }
);

// Define relationships
PermissionRole.belongsTo(Role, { foreignKey: "role_id_fk" });
PermissionRole.belongsTo(Permission, { foreignKey: "permission_id_fk" });
Role.belongsTo(School, { foreignKey: "school_id_fk" });
School.belongsTo(User, { foreignKey: "owner_user_id_fk" });
Module.belongsTo(School, { foreignKey: "school_id_fk" });
Audit.belongsTo(User, { foreignKey: "user_id_fk" });
Member.belongsTo(User, { foreignKey: "user_id_fk" });
Member.belongsTo(School, { foreignKey: "school_id_fk" });
Member.belongsTo(Role, { foreignKey: "role_id_fk" });
Registered.belongsTo(User, { foreignKey: "student_id_fk" });
Registered.belongsTo(Module, { foreignKey: "module_id_fk" });
Profile.belongsTo(User, { foreignKey: "user_id_fkd" });

// Export models and sequelize instance
module.exports = {
  sequelize,
  Profile,
  Member,
  User,
  Audit,
  Module,
  Registered,
  Role,
  School,
  PermissionRole,
  Permission,
};
