const pool = require('./index');

exports.runQuery = async (query) => {
    const client = await pool.connect().catch((e)=>console.log(e));
    const result = await pool.query(query).catch((e)=>console.log(e));
    client.release();
    return result;
}

