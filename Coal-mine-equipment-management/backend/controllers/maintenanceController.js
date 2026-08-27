const Maintenance = require("../models/Maintenance");

// Create Maintenance Request
const createMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.create(req.body);

    res.status(201).json({
      message: "Maintenance request created",
      maintenance,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Maintenance Requests
const getMaintenanceRequests = async (req, res) => {
  try {
    const requests = await Maintenance.find();

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Maintenance Status
const updateMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Maintenance updated",
      maintenance,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createMaintenance,
  getMaintenanceRequests,
  updateMaintenance,
};