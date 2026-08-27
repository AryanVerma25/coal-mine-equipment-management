const Equipment = require("../models/Equipment");

// Add Equipment
const addEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.create(req.body);

    res.status(201).json({
      message: "Equipment added successfully",
      equipment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Equipment
const getEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find();

    res.status(200).json(equipments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Equipment
const updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Equipment updated successfully",
      equipment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Equipment
const deleteEquipment = async (req, res) => {
  try {
    await Equipment.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Equipment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addEquipment,
  getEquipments,
  updateEquipment,
  deleteEquipment,
};