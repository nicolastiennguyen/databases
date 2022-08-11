var models = require('../models');

module.exports = {
  get: (req, res) => {
    models.users.getAll((err, results) => {
      if (err) {
        throw (err);
      } else {
        res.json(results);
      }
    });
  },

  post: (req, res) => {
    var params = [req.body.username];
    models.users.create(params, (err, results) => {
      if (err) {
        throw (err);
      } else {
        res.json(results);
      }
    });
  }
};
