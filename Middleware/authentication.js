const authentication = (req,res,next)=>{
    // check for the existence of the token
    if(req.header("Authorization")){
  
      // split the "Bearer [token]" string and save the token inside a variable
      const token = req.header("Authorization").split(" ")[1]
  
      // check if the token is genuine 
      jwt.verify(token,process.env.SECRET,(err, result)=>{
        if(err){
          console.log(err)
        res.json("forbidden")
        return
        }
  
        // save the result of verifying the token inside req.token
        req.token = result
  
        // go to the next function
        next()
      })
    }else{
      console.log("no header")
      res.status(403).json("forbidden")
    }
  }