var sql = require("../db/db.js").db();

//User object constructor
var User = user => {
  this.id = user.id;
  this.login = user.login;
  this.nom = user.nom;
  this.password = user.password;
  this.prenom = user.prenom;
  this.email = user.email;
};

User.getUser = (login, result) => {
  sql.query("Select * from user where login = ?", [login], (err, res) => {
    if (err) {
      result(err);
    } else {
      if (res.length > 0) {
        result(null, res);
      } else {
        result(null,["error"]);
      }
    }
  });
};

module.exports = User;