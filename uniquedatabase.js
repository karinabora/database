var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "Karina@123",  
database: "javascript"  
});  
con.connect(function(err) {  
if (err) throw err;  
con.query("SELECT * FROM employees WHERE id = '1'", function (err, result) {  
if (err) throw err;  
console.log(result);  
});  
});  