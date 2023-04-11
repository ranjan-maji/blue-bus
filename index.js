const express = require('express');


const app = express()

app.listen(5001, () => console.log('Api running port 5001'))

app.get('/', (req, res) => res.json('My Server is running !!!') )