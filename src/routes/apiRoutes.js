const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");
const { validateInput } = require("../middlewares/validator");

router.get("/list", apiController.getAllDebts);
router.post("/tambah", validateInput, apiController.addDebt);

module.exports = router;
