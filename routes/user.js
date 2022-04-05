const router = require('express').Router();
const userController = require('../controller/user');
const { addUser,userLogin} = require('../validations/userValidate');
const { validateErrors ,varifyUser} = require('../middleware/global-middlewares');

(()=>{

    getRequest()

    postRequest()

    patchRequest()

    deleteRequest()

})();




function getRequest(){
 
}


function postRequest(){
    router.post('/add',  varifyUser ,addUser(), validateErrors, userController.addUser) // 2 layer security
    router.post('/login', userLogin(), validateErrors, userController.userLogin) // Generate Token
}


function patchRequest(){
    
}

function deleteRequest(){
    
}

module.exports = router