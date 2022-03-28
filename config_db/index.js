// https://node-postgres.com/features/connecting

const { Pool } = require("pg");
let options = {
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "admin",
  database: "dolphin"
};



  (() => {

    if (process.env.NODE_ENV == 'production') {
      options = {
        host: "ec2-54-173-77-184.compute-1.amazonaws.com",
        user: "uvozrtjqlqstft",
        port: 5432,
        password: "752c063a54283bb1902786d55491bd112723cbed185a5dc010645193a873a7a2",
        database: "d6l8hmn3dbjvp3"
      }
    }

  })();

const pool = new Pool(options);

module.exports = pool;