const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "162.241.87.23",
  user: "darwinde_user",
  database: "darwindevs_passManagerAmrit",
  password: "c_{~@8rSc%J#",
});

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "passwordManager",
//   password: "",
// });

module.exports = pool.promise();
