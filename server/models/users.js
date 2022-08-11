var db = require('../db');

module.exports = {
  getAll: (callback) => {
    var queryStr = 'select * from users';
    db.query(queryStr, function(err, results) {
      if (err) {
        throw (err);
      } else {
        callback(results);
      }
    });
  },

  create: (params, callback) => {
    var queryStr = 'insert into users(username) values (?)';
    db.query(queryStr, params, function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};
