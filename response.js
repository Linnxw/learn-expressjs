const response=(statusCode,data,msg,res)=>{
  res.status(statusCode).json({
    payload:{
      status:statusCode,
      data,
      msg
    }
  })
}
module.exports=response