const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema(
  {
    equipmentId: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Working", "Maintenance", "Out of Service"],
      default: "Working",
    },

    purchaseDate: {
      type: Date,
    },

    health: {
    type: Number,
    default: 100,
    },

    image: {
    type: String,
    default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Equipment", equipmentSchema);