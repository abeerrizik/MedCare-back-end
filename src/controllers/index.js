const express = require("express");
const app = require("../app");
const router = express.Router();
// const middlewares = require("../middlewares");
const patients = require("./patient");

router.get("/profile/:id", patients.profile);
router.get("/medicationsList/:profileId", patients.medicationsList);
router.get("/medicationsList/:profileId/:medId", patients.medicationId);

module.exports = router;