var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'crypto'
});
 
try {
    connection.connect();
    
} catch (err) {
    console.log(err)
}

connection.query('SELECT * FROM `subsriptions`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0]);
});
 
connection.end();