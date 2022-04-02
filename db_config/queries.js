const { pool } = require('./index');

// Object to Insert Query
exports.insertRecord = async (records) => {

    const [keys, values, args$] = await keyValueArgs$(records)
    const client = await pool.connect();

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO student(${keys}) VALUES (${args$})`, values)
            .then(r => {
                resolve({ status: 200, msg: 'added successfully' })
                client.release();
            })
            .catch(e => { reject(e); client.release(); })
    })
}


// Object to string Keys, $, and value array
async function keyValueArgs$(records) {
    const keys = await Promise.resolve(Object.keys(records)),
        values = await Promise.resolve(Object.values(records)),
        args$ = await Promise.resolve(keys.map((_, i) => `$${i + 1}`));
    return [keys?.join(','), values, args$?.join(',')]
}