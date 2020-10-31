var connection = require('./connection.js');

var orm = {
    all: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    create: function(name, cb) {
        var queryString = "INSERT INTO burgers SET ?";

        connection.query(queryString, { name: name, devoured: false }, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    update: function(newID, cb) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString, [{ devoured: true }, { id: newID }], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
}

module.exports = orm;