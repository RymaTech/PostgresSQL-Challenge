const dbConnection = require('../database/db_connection.js');

const newUser = (name, location, cb) => {
  dbConnection.query(
    'INSERT INTO users (name, location) VALUES ($1, $2)', [name, location],-
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        console.log('res.rows: ' + res.rows);
        cb(null, res.rows);
      }
    }
  );
};

module.exports = newUser;
