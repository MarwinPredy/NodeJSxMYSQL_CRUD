const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const isAuth = require("./middelware/auth.js");
const cors = require('cors');
const corsConfig = {"origin":(origin, callback)=> callback(null, true)}

app.listen(port);

console.log("API server started on: " + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(isAuth);
app.use(cors(corsConfig));
var routes = require("./routes/approutes");
routes(app);
