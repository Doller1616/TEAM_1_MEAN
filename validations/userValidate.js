const { body, check } = require('express-validator');

exports.userValidator = () => {
  
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
        body('age').isLength({ min: 5 }).withMessage('Min length should be 5'),
        body('password') .custom((value, { req }) => {
            if (value !== req.body.password) {
              throw new Error('Password confirmation does not match password');
            }
            // Indicates the success of this synchronous custom validator
            return false;
          }),
    ]

}