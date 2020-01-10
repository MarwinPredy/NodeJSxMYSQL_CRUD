const mysql = require('mysql');

// connection configurations

exports.db =()=>{
  const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : "express"
});
 
// connect to database
mc.connect();
return mc;
};
