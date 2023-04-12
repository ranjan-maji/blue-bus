const Pool = require('pg').Pool

const pool = new Pool({
    user:'postgres',
    host:'my-database-1.chqplulyfjeo.ap-south-1.rds.amazonaws.com',
    database:'mydb',
    password:'Z1G45Of&5Y4$',
    port:5432
})


module.exports ={ pool }

