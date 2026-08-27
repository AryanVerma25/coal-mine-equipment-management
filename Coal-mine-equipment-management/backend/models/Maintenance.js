const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema(
  {
    equipmentId: {
      type: String,
      required: true,
    },

    issue: {
      type: String,
      required: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },

    reportedBy: {
      type: String,
      required: true,
    },

    remarks: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Maintenance", maintenanceSchema);