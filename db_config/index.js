//https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database

const { Pool } = require('pg');

const db = () => {
    let pool;
    // Production
    if (process.env.NODE_ENV.trim() === "production") {
        pool = new Pool({
            connectionString: 'postgres://uvozrtjqlqstft:752c063a54283bb1902786d55491bd112723cbed185a5dc010645193a873a7a2@ec2-54-173-77-184.compute-1.amazonaws.com:5432/d6l8hmn3dbjvp3',
            ssl: { rejectUnauthorized: false }
        });
        console.log("Production Mode");
    } else {
        // Developement
        pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'dolphin',
            password: 'admin',
            port: 5432,
        });
        console.log("Developement Mode");
    }

    return pool
}

generate_tables = async () => {
    // Generate Tables
    try {
        const client = await db().connect();
        console.log("DB Connected Successfully");
        client.query('CREATE TABLE IF NOT EXISTS student(id SERIAL PRIMARY KEY, firstname  TEXT, lastname  TEXT, age TEXT, address TEXT, email TEXT)')
            .then(() => console.log("Tables Generated"))
            .catch((e) => console.log(e))
        client.release();
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    pool: db(),
    db_connect: async () => {
        generate_tables();
    }
}

