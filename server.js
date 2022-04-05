const express = require('express');
const { db_connect } = require('./db_config');
const userRoutes = require('./routes/user')
const cors = require('cors');
const app = express();
const version = 'v1';


(()=>{
    configur_db();
    configur_cors();
    configur_parser();
    configur_routes();
    error404();
    globalErrorHandler();
})()

function configur_parser(){
    app.use(express.json());
}

function configur_db(){
    db_connect();
}

function configur_cors(){
    app.use(cors())
}

function configur_routes(){
    app.use(`/api/${version}/user`, userRoutes)
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
            msg : err.message || err || 'Somthing went wrong. Please try again later',
            status : 500
        })
    })

}


module.exports = app