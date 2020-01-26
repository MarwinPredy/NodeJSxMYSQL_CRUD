module.exports = (app)=> {
    var controller = require('../controller/appController');

    app.use((req, res, next)=> {
      res.header("Access-Control-Allow-Origin", "*"); 
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  
    // client Routes
    app.route('/client')
      .get(controller.list_all_client)
     
    app.route('/client/:clientId')
      .put(controller.update_a_client)
      .delete(controller.delete_a_client)

    //Commandes routes
    app.route('/commande')
      .get(controller.list_all_commande)

    //Auth route
    app.route("/auth").post(controller.auth);

};

