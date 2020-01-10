var Client = require('../model/appModel.js');
var Commande = require('../model/commandeModel.js');

exports.list_all_client = function(req, res) {
  Client.getAllClient(function(err, client) {

    console.log('controller')
    if (err)
      res.send(err);
    res.send(client);
  });
};


exports.update_a_client = function(req, res) {
  Client.updateById(req.params.clientId, new Client(req.body), function(err, client) {
    if (err)
      res.send(err);
    res.json(client);
  });
};

exports.delete_a_client = function(req, res) {
  Client.remove(req.params.clientId, function(err, client) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.list_all_commande = function(req, res) {
  Commande.getAllCommande(function(err, commande) {

    console.log('controller')
    if (err)
      res.send(err);
    res.send(commande);
  });
};