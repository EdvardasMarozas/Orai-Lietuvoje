var express = require("express");
var router = express.Router();
var indexController = require("../controllers/IndexController");

router.get("/:city", indexController.City);

module.exports = router;
