const asyncHandler = require("express-async-handler");
const Staff = require("../models/Staff");

// @desc Get all staffs
// @route GET /api/staffs
// @access Private
const getAllStaffs = async (req, res) => {
  try {
    const staffs = await Staff.findAll({
      attributes: [
        "ID",
        "NameEn",
        "NameKh",
        "CompanyName",
        "StaffID",
        "Department",
        "BranchCode",
        "BranchEn",
        "BranchKh",
        "PositionEn",
        "WinStatus",
      ],
    });

    staffs?.length
      ? res.status(200).json(staffs)
      : res.status(400).json({ message: "No staff found" });
  } catch (err) {
    console.error(err);
  }
};

// @desc Get a staff
// @route GET /api/staffs/id
// @access Private
const getStaff = asyncHandler(async (req, res) => {
  const { sid } = req.params;
  const staffs = await Staff.findAll({
    attributes: [
      "ID",
      "NameEn",
      "NameKh",
      "CompanyName",
      "StaffID",
      "Department",
      "BranchCode",
      "BranchEn",
      "BranchKh",
      "PositionEn",
      // "WinStatus",
    ],
    where: {
      StaffID: sid,
    },
  });

  // return data to clients
  res.status(200).json(staffs[0]);
});

// @desc Register attendant (Update) a staff
// @route PATCH /api/staffs
// @access Private
const registerStaff = asyncHandler(async (req, res) => {
  const { sid } = req.params;
  // const { FirstName, LastName, Gender, DateOfBirth } = req.body;

  await Staff.update(
    {
      WinStatus: "No",
    },
    {
      where: {
        StaffID: sid,
      },
    }
  );

  res.status(200).json({ sid, success: "true" });
});

module.exports = {
  getAllStaffs,
  getStaff,
  registerStaff,
};
