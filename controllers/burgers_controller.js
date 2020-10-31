var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll = (function(data) {
    var burgerData = {
      burgers: data
    };
    res.render("index", burgerData);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    req.body.name, function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function() {
    res.json("success");
  });
});

module.exports = router;
