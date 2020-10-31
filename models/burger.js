var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.all(function(res) {
        cb(res);
      });
    },

    insertOne: function(name, cb) {
      orm.create(name, function(res) {
        cb(res);
      });
    },
    updateOne: function(updatedId, cb) {
      orm.update(updatedId, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;
  