const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const response=require("./response")
const db=require("./koneksi")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get("/",(req,res)=>{
  db.query("SELECT * FROM mahasiswa",(err,resl)=>{
    response(200,resl,"get all data",res)
  })
})
app.get("/find",(req,res)=>{
  db.query(`SELECT nama FROM mahasiswa WHERE jurusan = '${req.query.jurusan}'`,(err,result)=>{
    if(err){
      console.log(err)
    }
    response(200,result,"find mahasiswa",res)
  })
  console.log(req.query.jurusan)
})
app.listen(3000,()=>{
  console.log("server up and runing")
})