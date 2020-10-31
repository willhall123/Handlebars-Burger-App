var router = require("express").Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  console.log("home page");
  burger.selectAll(function(data) {
    var burgerData = {
      burgers: data
    };
    console.log(burgerData);

    res.render("index", burgerData);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    req.body.burger_name, function(result) {
    res.redirect("/")
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function() {
    res.json("success");
  });
});

module.exports = router;
