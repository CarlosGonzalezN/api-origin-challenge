const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user");

router.post("/validate", userController.validate);
router.post("/", userController.createUser);

module.exports = router;
