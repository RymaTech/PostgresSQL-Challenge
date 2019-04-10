// Add code below to query your database

const dbConnection = require('../database/db_connection.js');

const getData = cb => {
  dbConnection.query('SELECT * FROM users;', (err, res) => {
    if (err) {
      return cb(err);
    } else {
      console.log('res.rows: ' + res.rows);
      cb(null, res.rows);
    }
  });
};

module.exports = getData;
