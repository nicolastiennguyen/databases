var db = require('../db');

module.exports = {
  getAll: (callback) => {
    var queryStr = 'select messages.id, messages.text, messages.roomname, users.username FROM messages LEFT JOIN users ON (messages.userID = users.id) ORDER by messages.id DESC';
    db.query(queryStr, function(err, results) {
      if (err) {
        throw (err);
      } else {
        callback(null, results);
      }
    });
  },

  create: (params, callback) => {
    var queryStr = 'insert into messages(text, userid, roomname) \
                    values (?, (select id from users where username = ? limit 1), ?)';
    db.query(queryStr, params, function(err, results) {
      if (err) {
        throw (err);
      } else {
        callback(null, results);
      }
    });
  }
};