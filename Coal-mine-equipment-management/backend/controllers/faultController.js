const Fault = require("../models/Fault");
const Equipment = require("../models/Equipment");


// ==========================
// Report Fault (Operator)
// ==========================
const reportFault = async (req, res) => {
  try {
    const fault = await Fault.create({
      equipment: req.body.equipment,
      reportedBy: req.user.id,
      faultType: req.body.faultType,
      priority: req.body.priority,
      description: req.body.description,
      image: req.body.image,
    });

    res.status(201).json({
      message: "Fault reported successfully",
      fault,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ==========================
// Get All Faults (Admin)
// ==========================
const getFaults = async (req, res) => {
  try {
    const faults = await Fault.find()
      .populate("equipment")
      .populate("reportedBy", "name email")
      .populate("assignedEngineer", "name email");

    res.status(200).json(faults);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ==========================
// Assign Engineer (Admin)
// ==========================
const assignEngineer = async (req, res) => {
  try {
    const fault = await Fault.findByIdAndUpdate(
      req.params.id,
      {
        assignedEngineer: req.body.engineerId,
        status: "Assigned",
      },
      { new: true }
    );

    res.status(200).json({
      message: "Engineer assigned successfully",
      fault,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ==========================
// Start Repair (Engineer)
// ==========================
const startRepair = async (req, res) => {
  try {
    const fault = await Fault.findById(req.params.id);

    if (!fault) {
      return res.status(404).json({
        message: "Fault not found",
      });
    }

    fault.status = "In Progress";

    await fault.save();

    await Equipment.findByIdAndUpdate(fault.equipment, {
      status: "Maintenance",
    });

    res.status(200).json({
      message: "Repair started",
      fault,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ==========================
// Complete Repair (Engineer)
// ==========================
const completeRepair = async (req, res) => {
  try {
    const fault = await Fault.findById(req.params.id);

    if (!fault) {
      return res.status(404).json({
        message: "Fault not found",
      });
    }

    fault.status = "Completed";
    fault.repairNotes = req.body.repairNotes;
    fault.completedAt = new Date();

    await fault.save();

    await Equipment.findByIdAndUpdate(
      fault.equipment,
      {
        status: "Working",
        health: req.body.health,
      }
    );

    res.status(200).json({
      message: "Repair completed successfully",
      fault,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  reportFault,
  getFaults,
  assignEngineer,
  startRepair,
  completeRepair,
};