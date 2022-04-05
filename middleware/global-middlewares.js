const { validationResult } = require('express-validator');
const jwt =require('jsonwebtoken')


exports.validateErrors = (req, res, next) => {
   const result = validationResult(req);
   
   if( result.isEmpty() ) {
       next()
   }else{
       const collect = result.array().reduce((acc,v)=>({ ...acc, ...{ key: v.param, msg: v.msg} }),[])
       next(collect)
   }
}


exports.varifyUser = (req, res, next) => {
    const auth = req.headers.authorization;
    const token  = auth ? auth.slice(7, auth.length) : null;
   jwt.verify(token,'Quantum',(error,decoded)=>{
       if(error){
           next(error)
       }else if(!decoded){
           req.errorStatus = 401;
           next(new Error("User Unauthorized "))
       }else{
           req.foundUser = decoded;
    console.log("OOOOOOOOOOOO", decoded);

           next();
       }

   })


}