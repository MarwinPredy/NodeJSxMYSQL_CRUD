var sql = require('../db/db.js').db();

//Client object constructor
var Client = function(client){
    this.nom = client.nom;
    this.prenom = client.prenom;
    this.adresse = client.adresse;
    this.date_naissance = client.date_naissance;
    this.civilite = client.civilite;
};


Client.getAllClient = function (result) {
        sql.query("Select * from client", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                 result(null, res);
                }
            });   
};
Client.updateById = function(id, client, result){
  sql.query("UPDATE client SET prenom = ?, nom = ?, adresse = ?,date_naissance = ?, civilite = ?  WHERE id_client = ?", [client.nom, client.prenom, client.adresse, client.date_naissance, client.civilite, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Client.remove = function(id, result){
     sql.query("DELETE FROM client WHERE id_client = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Client;