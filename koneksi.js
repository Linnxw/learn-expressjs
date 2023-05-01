const mysql=require("mysql")
const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"db_restapi"
})

module.exports=db