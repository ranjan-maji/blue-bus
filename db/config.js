const Pool = require('pg').Pool

const pool = new Pool({
    user:'postgres',
    host:'my-database-1.chqplulyfjeo.ap-south-1.rds.amazonaws.com',
    database:'mydb',
    password:'Z1G45Of&5Y4$',
    port:5432
})


const getMovies = (req, res) => {
    pool.query("select * from emp",(err,results) => {
        if(err){
            throw err;
        }
        res.status(200).json(results.rows)
    })
}
module.exports ={
    getMovies
}