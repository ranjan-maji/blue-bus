const express = require('express');
const bodypasser = require('body-parser');
const db =require('./db/config')

const app = express()
app.use(bodypasser.json());
app.use(
    bodypasser.urlencoded({
        extended:true,
    })
);

const port = 5001



app.get('/', (req, res) => res.json('My Server is running !!!') )

app.get('/allemp', db.getMovies)


app.listen(port, () => console.log(`Api running port ${port}!`))