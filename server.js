const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const response=require("./response")
const db=require("./koneksi")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get("/",(req,res)=>{
  res.send("<h1>Home</h1>")
})
app.get("/mahasiswa",(req,res)=>{
  
  db.query("SELECT * FROM mahasiswa",(err,resl)=>{
    if(err)throw err
    response(200,resl,"get all data mahasiswa",res)
  })
  
})
app.get("/mahasiswa/otomotif",(req,res)=>{
  
  db.query(`SELECT * FROM mahasiswa WHERE jurusan = 'otomotif'`,(err,result)=>{
    if(err){
      console.log(err)
    }
    response(200,result,"mahasiswa jurusan otomotif",res)
  })
  
})
app.post("/mahasiswa",(req,res)=>{
  const {nama,nisn,jurusan}=req.body
  
  const sql=`INSERT INTO mahasiswa (nama,nisn,jurusan) VALUES ('${nama}','${nisn}','${jurusan}')`
    db.query(sql,(err,result)=>{
    if(err){
      response(500,"err","err",res)
    }else{
      response(200,req.body,"berhasil post data",res)
      console.log(result)
    }
  })
})

app.put("/mahasiswa",(req,res)=>{
  const {nama,nisn,jurusan}=req.body
  
  const sql=`UPDATE mahasiswa SET nama = '${nama}',jurusan = '${jurusan}' WHERE nisn = '${nisn}'`
  db.query(sql,(err,result)=>{
    if(err){
      response(500,"terjadi kesalahan","terdapan error",res)
    }else{
    response(200,req.body,result.message,res)}
  })
})
app.delete("/mahasiswa",(req,res)=>{
  const {nisn}=req.body
  const sql=`DELETE FROM mahasiswa WHERE nisn = '${nisn}'`
  
  db.query(sql,(err,result)=>{
    if(err) throw err
    if(result.protocol41)
    response(200,result,"berhasil menghapus data",res)
    if(!result.protocol41)
    response(500,result.protocol41,"user tidak ditemukan",res)
  })
 
})
app.listen(3000,()=>{
  console.log("server up and runing")
})