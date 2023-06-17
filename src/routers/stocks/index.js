const express = require("express");
const controlerStocks = require("../../controllers/stocks");
const router = express.Router();

router.get("/list", controlerStocks.getStocks);
router.get("/:symbol", controlerStocks.getDetailStock);
router.get(
  "/:symbol/:interval/:startDate/:endDate",
  controlerStocks.getDataTime
);
router.get("/:symbol/:interval", controlerStocks.getDataRealTime);
module.exports = router;
