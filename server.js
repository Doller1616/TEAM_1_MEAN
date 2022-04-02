const express = require('express');
const path = require('path');
const ejs = require('ejs')
const { db_connect } = require('./db_config');
const userRoutes = require('./routes/userRoutes');
const htmlPageRoutes = require('./routes/htmlPagesRoutes');
const cors = require('cors');
const app = express();
const version = 'v1';


(()=>{
    configur_db();
    configur_cors();
    setup_engine();
    setup_public_dir();
    configur_parser();
    configur_routes();
    // Error Handeling
    error404();
    globalErrorHandler();
})()

function configur_parser(){
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

function configur_db(){
    db_connect();
}

function configur_cors(){
    app.use(cors())
}

function configur_routes(){
    app.use('/', htmlPageRoutes )
    app.use(`/api/${version}/user`, userRoutes)
}

function setup_engine() {
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'html');
    app.engine('html', ejs.renderFile);
}

function setup_public_dir() {
    app.use(express.static('./public'));
}

function error404(){
   app.use((req, res)=>{
       res.status(404).send({
           status : 404,
           msg: 'NOT FOUND'
       })
   })
}

function globalErrorHandler(){

    app.use((err, req, res, next)=>{
        res.status(500).send({
            msg : err.message || 'Somthing went wrong. Please try again later',
            status : 500
        })
    })

}


module.exports = app