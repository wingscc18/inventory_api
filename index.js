
const SQL = require('sqlite3').verbose()
const db = new SQL.Database('datos.db');
var cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express'); //
const app = express();
let PORT = 3001


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/save', function (req, res) {

    if (!req.body) return res.jsonp(JSON.stringify({
        error: true,
        message: 'Paremetros incorrectos'
    }))



    db.run(`select * from inventario`, (error, rows) => {

        console.log(rows);

    })


});

app.get('/get', async function (req, res) {


    if (!req.body) return res.jsonp(JSON.stringify({
        error: true,
        message: 'Paremetros incorrectos'
    }))

    db.all(`Select * FROM inventario`, async (error, rows) => {


        res.send(rows);


    })


});


app.post('/login', function (req, res) {

    if (!req.body) return res.jsonp(JSON.stringify({
        error: true,
        message: 'Paremetros incorrectos'
    }))

    if (!req.body.email) return res.jsonp(JSON.stringify({
        error: true,
        message: 'Es necesario un correo. -.-'
    }))

    if (!req.body.password) return res.jsonp(JSON.stringify({
        error: true,
        message: 'Es necesario una contraseña genio. -.-'
    }))

    db.get(`Select * FROM usuarios WHERE email = '${req.body.email}`, async (error, row) => {

        if (row) {

        } else {

// WEEE ya llego  mi hermana a ver si no me pide ya la latop, es que tambien tiene que hacer tarea XD

        }

    })



});

app.listen(PORT, () => {
    console.log(`Corriendo en http://localhost:${PORT}`);
})