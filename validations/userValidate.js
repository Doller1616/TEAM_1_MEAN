const { body, check } = require('express-validator');
const {userLogin} = require('../db_config/models')
exports.addUser = () => {
  
    //  return true
    //    const { age } = req.body;
    //     console.log('req.body',req.body);
    //      if(age > 18){
    //          next()
    //      }else{
    //         next(new Error('Invalid Age Group'))
    //      }

    return [
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').exists().withMessage('pasword is mandatory')
    ]

}

exports.userLogin =()=>{
   
console.log();
    return[
      body('email').isEmail().withMessage('Invalid Email'),
      body('password').custom( async (value,{req})=>{
        const {email,password} = req.body
        const {data}  = await   userLogin(email,password);
        
        if(data.rows && data.rows.length > 0) {
          req.foundUser = data.rows[0];
          return true
        }else {
          return false
        }

      })

    ]
}