const router = require('express').Router();
const htmlPageController = require('../controller/htmlPagesController');

(()=>{

    getRequest()

})();


function getRequest(){
    router.get('/', htmlPageController.htmlHomePage )
    router.get('/about', htmlPageController.htmlAboutPage )
}


module.exports = router