const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();


app.use(cors())
app.use(express.json());

// https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
const pool = new Pool({
  connectionString: 'postgres://uvozrtjqlqstft:752c063a54283bb1902786d55491bd112723cbed185a5dc010645193a873a7a2@ec2-54-173-77-184.compute-1.amazonaws.com:5432/d6l8hmn3dbjvp3',
  ssl: { rejectUnauthorized: false }
})

app.get('/', async (req, res) => {
  res.send('server Started')
});

app.get('/create', async (req, res) => {
  pool.query('SELECT * FROM student')
    .then(r => res.send(r.rows))
    .catch(e => { res.send({ error: e }); console.log(e); })
});


app.get('/list', async (req, res) => {
  pool.query('SELECT * FROM student')
    .then(r => res.send(r.rows))
    .catch(e => { res.send({ error: e }); console.log(e); })
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
  pool.query(`DELETE FROM student	WHERE id = $1`, [id])
    .then(r => res.send({ msg: 'Entry Deleted Successfully' }))
    .catch(e => { res.send({ error: e }); console.log(e); })
});



app.listen(process.env.PORT || 8080, async () => {
  console.log("server started")

  // DB Connectivity
  try {
    const client = await pool.connect();
    console.log("DB Connected Successfully");
    client.query('CREATE TABLE IF NOT EXISTS student(id SERIAL PRIMARY KEY, firstname  TEXT, lastname  TEXT, age TEXT, address TEXT, email TEXT)')
    .then(()=>  console.log("Tables Generated"))
    .catch((e)=> console.log(e))
    client.release();
  } catch (err) {
    console.error(err);
  }

});
