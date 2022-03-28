// https://node-postgres.com/features/connecting

const { Pool } = require("pg");
let options = {
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "admin",
  database: "dolphin"
}



( ()=>{

  if(process.env.NODE_ENV == 'production'){
    options = {

        }
  }

} )();

const pool = new Pool(options);

module.exports = pool;