const express = require('express');
const pool = require('./config_db');
const cors = require('cors');
// const { runQuery } = require('./config_db/models');
const app = express();
app.use(cors())
app.use(express.json());

app.get('/list', async(req, res) => {
    pool.query('SELECT * FROM student')
        .then(r => res.send(r.rows))
        .catch(e => { res.send({ error: e }); console.log(e); })
        
    // const data = await runQuery('SELECT * FROM student');
    // res.send(data?.rows)
});

app.post('/add', (req, res) => {
    const { firstname, lastname, age, address, email } = req.body;
    pool.query("INSERT INTO student(firstname,lastname,age,address,email) VALUES ($1,$2,$3,$4,$5)",
        [firstname, lastname, age, address, email])
        .then(r => res.send({ data: req.body, msg: 'added successfully' }))
        .catch(e => { res.send({ error: e }); console.log(e); })
});

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    pool.query(`DELETE FROM student	WHERE id = $1`,[id])
        .then(r => res.send({ msg: 'added successfully' }))
        .catch(e => { res.send({ error: e }); console.log(e); })
});

// DB Connectivity
pool.connect()
    .then(() => console.log("DB Connected Successfully"))
    .catch((e) => console.log(e));

app.listen(process.env.PORT || 8080, () => console.log("server started"));