var models = require('../models');

module.exports = {
  get: (req, res) => {
    models.messages.getAll((err, results) => {
      if (err) {
        throw (err);
      } else {
        res.json(results);
      }
    });
  },

  post: (req, res) => {
    var params = [req.body.message, req.body.username, req.body.roomname];
    models.messages.create(params, (err, results) => {
      if (err) {
        throw (err);
      } else {
        res.json(results);
      }
    });
  }
};


