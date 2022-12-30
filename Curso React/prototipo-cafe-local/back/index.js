const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "!nspi0000",
    database: "teste-cafe",
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM teste1"
    db.query(sqlSelect, (err, result) => {
        res.send(result) 
    })
})

app.post("/api/insert", (req, res) => {
    const name = req.body.name
    const phone = req.body.phone
    const coffee = req.body.coffee
    const info = req.body.info

    const sqlInsert = "INSERT INTO teste1 (name, phone, coffee, info) VALUES (?,?,?,?)"
    db.query(sqlInsert, [name, phone, coffee-1, info], (err, result) => {
        console.log(err)
    })
})

app.listen(3001, () => {
    console.log('running on port 3001')
});