const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "my_spotify_db",
    multipleStatements: true
})

app.use(cors())
connection.connect()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/artists', (req, res) => {
    
    connection.query("SELECT * FROM artists", function(error, results) {
        if (error) throw error;
            res.json(results)
    })
})

app.get('/artist', (req, res) => {
    const id = req.query.id
    console.log(id)
    connection.query("SELECT * FROM artists where id = ?", 
    [id],
    function(error, results) {
        if (error) throw error;
            res.json(results)
    })
})

app.get('/albums', (req, res) => {
    
    connection.query("SELECT * FROM albums", function(error, results) {
        if (error) throw error;
            res.json(results)
    })
})

app.get('/album', (req, res) => {
    const id = req.query.id
    const queries = [
        "SELECT * FROM albums where id = ?",
        "SELECT * FROM tracks where album_id = ?"
    ]

    connection.query(queries.join(";"), 
    [id, id],
    function(error, results) {
        if (error) throw error;
        const output = {}
        output["album"] = results[0]
        output["tracks"] = results[1]
        res.json(output)
    })
})

app.get('/genres', (req, res) => {
    
    connection.query("SELECT * FROM genres", function(error, results) {
        if (error) throw error;
            res.json(results)
    })
})

app.get('/genre', (req, res) => {
    const id = req.query.id

    connection.query("select * from genres inner join genres_albums on genres.id = genres_albums.genre_id inner join albums on genres_albums.album_id = albums.id where genres.id = ?", 
    [id],
    function(error, results) {
        if (error) throw error;
        res.json(results)
    })
})

app.get('/randomAlbums', (req, res) => {

    const inf = Math.random() * (1625 - 30)
    const sup = inf + 30
    connection.query("select * from albums where id > ? and id < ?", 
    [inf, sup],
    function(error, results) {
        if (error) throw error
        res.json(results)
    })
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})