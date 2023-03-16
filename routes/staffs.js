const express = require("express");
const {
  getAllStaffs,
  getStaff,
  registerStaff,
} = require("../controllers/staffsController");

// work like app
const router = express.Router();

// get all staffs
router.get("/", getAllStaffs);

// get a staff
router.get("/:sid", getStaff);

// register attendant
router.post("/:sid", registerStaff);

module.exports = router;
