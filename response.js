const response=(statusCode,data,msg,res)=>{
  res.status(statusCode).json({
    payload:data,
    msg,
    metaData:{
      prev:"",
      next:""
    }
  })
}
module.exports=response