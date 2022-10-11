var mysql = require('mysql');  
var con = mysql.createConnection({  
host: "localhost",  
user: "root",  
password: "Karina@123"  
});  
con.connect(()=>{con.query("CREATE DATABASE J")})
