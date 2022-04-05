const { validationResult } = require('express-validator');


exports.validateErrors = (req, res, next) => {
   const result = validationResult(req);
   
   if( result.isEmpty() ) {
       next()
   }else{
       const collect = result.array().reduce((acc,v)=>({ ...acc, ...{ key: v.param, msg: v.msg} }),[])
       next(collect)
   }
}