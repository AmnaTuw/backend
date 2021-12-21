const authorization = (str)=>{

    return (req,res,next)=>{
  
      const token = req.token;
  
      if(token.permissions.includes(str)){
  
        next()
      }else {
        console.log("wrong permission")
        res.status(403).json("forbidden")
      }
    }
  }

  module.exports = authorization