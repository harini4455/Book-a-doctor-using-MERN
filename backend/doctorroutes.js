const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();

// Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a doctor
router.post("/", async (req, res) => {
  const doctor = new Doctor({
    name: req.body.name,
    specialization: req.body.specialization,
  });

  try {
    const newDoctor = await doctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
