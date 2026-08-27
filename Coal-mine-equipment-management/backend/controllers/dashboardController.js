const Equipment = require("../models/Equipment");
const Maintenance = require("../models/Maintenance");

const getDashboardStats = async (req, res) => {
  try {
    const totalEquipment = await Equipment.countDocuments();

    const workingEquipment = await Equipment.countDocuments({
      status: "Working",
    });

    const maintenanceEquipment = await Equipment.countDocuments({
      status: "Maintenance",
    });

    const outOfServiceEquipment = await Equipment.countDocuments({
      status: "Out of Service",
    });

    const pendingRequests = await Maintenance.countDocuments({
      status: "Pending",
    });

    res.status(200).json({
      totalEquipment,
      workingEquipment,
      maintenanceEquipment,
      outOfServiceEquipment,
      pendingRequests,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getDashboardStats };