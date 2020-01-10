var sql = require('../db/db.js').db();

//Commande object constructor
var Commande = function(commande){
    this.commande = commande.commande;
    this.status = commande.status;
};


Commande.getAllCommande = function (result) {
        sql.query("SELECT * FROM commande,commande_produit,produit WHERE commande.id_commande=commande_produit.id_commande AND commande_produit.id_produit=produit.id_produit", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                //   console.log('commande : ', res);  
                 result(null, res);
                }
            });   
};

module.exports= Commande;