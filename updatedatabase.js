var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "Karina@123",  
database: "javascript"  
});  
var sql = "UPDATE employees2000 SET city = 'Delhi' WHERE city = 'Allahabad'";  
con.connect((()=>{con.query(sql)}))
