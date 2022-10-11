var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "Karina@123",  
database: "javascript"  
});  
var sql = "DELETE FROM employees2000 WHERE city = 'Mumbai'";  
con.connect(()=>{con.query(sql)})