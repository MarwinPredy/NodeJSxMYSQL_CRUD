var Client = require('../model/appModel.js');
var Commande = require('../model/commandeModel.js');
var User = require('../model/userModel');
const jwt = require('jsonwebtoken');


exports.list_all_client = function (req, res) {
  if (!req.isAuth) {
    throw new Error("Unauthenticated!");
  }
  Client.getAllClient(function (err, client) {

    console.log('controller')
    if (err)
      res.send(err);
    res.send(client);
  });
};


exports.update_a_client = function (req, res) {
  if (!req.isAuth) {
    throw new Error("Unauthenticated!");
  }
  Client.updateById(req.params.clientId, new Client(req.body), function (err, client) {
    if (err)
      res.send(err);
    res.json(client);
  });
};

exports.delete_a_client = function (req, res) {
  if (!req.isAuth) {
    throw new Error("Unauthenticated!");
  }
  Client.remove(req.params.clientId, function (err, client) {
    if (err)
      res.send(err);
    res.json({
      message: 'Task successfully deleted'
    });
  });
};

exports.list_all_commande = function (req, res) {
  if (!req.isAuth) {
    throw new Error("Unauthenticated!");
  }
  Commande.getAllCommande(function (err, commande) {
    if (err)
      res.send(err);
    res.send(commande);
  });
};

exports.auth = ({
  body
}, res) => {
  User.getUser(body.login, (err, [user]) => {
    if (err) {
      res.status(400).send(err)
      res.send(err)
    } else if (user === 'error') {
      res.status(400).send(user);
      console.log(user)
    };
    if (user.password === body.password) {
      const token = jwt.sign({
          userId: user.id_user,
          login: user.login
        },
        process.env.SECRET || "my_magic_secret", {
          expiresIn: "1h"
        }
      );

      const result = {
        login: user.login,
        userId: user.id_user,
        token,
        tokenExpiration: 1
        //ajouter un timestamp
      };

      res.send(result);
    }
  });
};