const express = require("express");

const {
  reportFault,
  getFaults,
  assignEngineer,
  startRepair,
  completeRepair,
} = require("../controllers/faultController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Operator
router.post("/", protect, reportFault);

// Admin
router.get("/", protect, getFaults);
router.patch("/:id/assign", protect, assignEngineer);

// Engineer
router.patch("/:id/start", protect, startRepair);
router.patch("/:id/complete", protect, completeRepair);

module.exports = router;