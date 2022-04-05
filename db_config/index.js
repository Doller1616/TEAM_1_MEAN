//https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database

const { Pool } = require('pg');

const db = () => {
    let pool;
    // Production
    if (process.env.NODE_ENV.trim() === "production") {
        pool = new Pool({
            connectionString: 'postgres://tlznagxxgbcbaz:9575b497b6ca26a9924aeac88aec2c1849a4e913c3c65b9f1d8690bc54dc417b@ec2-18-215-96-22.compute-1.amazonaws.com:5432/d53j2thu7963td',
            ssl: { rejectUnauthorized: false }
        });
        console.log("Production Mode");
    } else {
        // Developement
        pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'postgres',
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
        client.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, firstname  TEXT, lastname  TEXT, password TEXT, email TEXT)')
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

