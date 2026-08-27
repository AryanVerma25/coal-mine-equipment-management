const express = require("express");

const {createMaintenance,getMaintenanceRequests,updateMaintenance,} = require("../controllers/maintenanceController");

const router = express.Router();

router.post("/", createMaintenance);
router.get("/", getMaintenanceRequests);
router.put("/:id", updateMaintenance);

module.exports = router;