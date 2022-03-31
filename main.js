const server = require('./server');



// const express = require('express');
// const { db_connect,pool } = require('./db_config');
// const { insertRecord } = require('./db_config/models');
// const cors = require('cors');
// const app = express();

// app.get('/', async (req, res) => {
//   res.send('server Started')
// });

// app.get('/create', async (req, res) => {
//   pool.query('SELECT * FROM student')
//     .then(r => res.send(r.rows))
//     .catch(e => { res.send({ error: e }); console.log(e); })
// });


// app.get('/list', async (req, res) => {
//   pool.query('SELECT * FROM student')
//     .then(r => res.send(r.rows))
//     .catch(e => { res.send({ error: e }); console.log(e); })
// });

// app.post('/add', async (req, res) => {
//   const { firstname, lastname, age, address, email } = req.body;
//   pool.query("INSERT INTO student(firstname,lastname,age,address,email) VALUES ($1,$2,$3,$4,$5)",
//     [firstname, lastname, age, address, email])
//     .then(r => res.send({ data: req.body, msg: 'added successfully' }))
//     .catch(e => { res.send({ error: e }); console.log(e); })
// });

// app.get('/delete/:id', (req, res) => {
//   const { id } = req.params;
//   pool.query(`DELETE FROM student	WHERE id = $1`, [id])
//     .then(r => res.send({ msg: 'Entry Deleted Successfully' }))
//     .catch(e => { res.send({ error: e }); console.log(e); })
// });



server.listen(process.env.PORT || 8080, async () => {
  console.log("server started" )
});
