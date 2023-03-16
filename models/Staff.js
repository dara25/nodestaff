const Sequelize = require("sequelize");
const sequelize = require("../config/dbConfig");

const Staff = sequelize.define(
  "Staff",
  {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    NameEn: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    NameKh: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    CompanyName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    StaffID: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Department: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    BranchCode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    BranchEn: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    BranchKh: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    PositionEn: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    WinStatus: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "MSLDStaffList",
    timestamps: false,
  }
);

module.exports = Staff;
