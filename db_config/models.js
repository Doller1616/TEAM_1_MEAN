const { pool } = require('./index');

exports.insertRecord = async(records) => {
    const { firstname, lastname, age, address, email } = records;
    const client = await pool.connect();
    return new Promise((resolve, reject) => {
        pool.query("INSERT INTO student(firstname,lastname,age,address,email) VALUES ($1,$2,$3,$4,$5)",
            [firstname, lastname, age, address, email])
            .then(r => {
                resolve({data : r, msg : 'added successfully'})
                client.release();
            })
            .catch(e => { reject({ error: e }); client.release(); })
    })
}
