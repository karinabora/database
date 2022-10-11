var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "Karina@123",  
database: "javascript"  
});  
var sql1 = "CREATE TABLE employees2000 (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255),pin_code INT(6))";
con.connect(()=>{con.query(sql1)
}) 
