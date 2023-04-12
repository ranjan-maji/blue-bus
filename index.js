const express = require('express');
const bodypasser = require('body-parser');









const app = express()
app.use(bodypasser.json());
app.use(
    bodypasser.urlencoded({
        extended:true,
    })
);

const port = 5001


const empRoute = require('./routes/empRoute');

app.get('/', (req, res) => res.json('My Server is running !!!') )

//route
app.use ('/empRoutes', empRoute);


app.listen(port, () => console.log(`Api running port ${port}!`))