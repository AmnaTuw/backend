const jwt = require('jsonwebtoken')

const authentication = (req,res,next)=>{
    if(req.header("Authorization")){
  
      const token = req.header("Authorization").split(" ")[1]
  
      jwt.verify(token,process.env.SECRET,(err, result)=>{
        if(err){
          console.log(err)
        res.json("forbidden")
        return
        }
        req.token = result
        next()
      })
    }else{
      console.log("no header")
      res.status(403).json("forbidden")
    }
  }

  module.exports = authentication