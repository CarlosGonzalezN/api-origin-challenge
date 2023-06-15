const express = require("express");
const controlerStocks = require("../../controllers/stocks");
const router = express.Router();

router.get("/list", controlerStocks.getStocks);
router.get("/:symbol", controlerStocks.getDetailStock);
module.exports = router;
