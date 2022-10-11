var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "Karina@123",  
database: "javascript"  
});  
var sql = "DROP TABLE employees44";  
con.connect(()=>{con.query(sql)}) 
