const express = require("express");

const {addEquipment,getEquipments,updateEquipment,deleteEquipment,} = require("../controllers/equipmentController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addEquipment);
router.put("/:id", protect, updateEquipment);
router.delete("/:id", protect, deleteEquipment);
router.get("/", getEquipments);

module.exports = router;