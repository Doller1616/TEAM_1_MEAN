const router = require('express').Router();
const userController = require('../controller/user');
const { userValidator } = require('../validations/userValidate');
const { validateErrors } = require('../middleware/global-middlewares');

(()=>{

    getRequest()

    postRequest()

    patchRequest()

    deleteRequest()

})();




function getRequest(){

}

function postRequest(){
    router.post('/add', userValidator(), validateErrors, userController.addUser)
}

function patchRequest(){
    
}

function deleteRequest(){
    
}

module.exports = router