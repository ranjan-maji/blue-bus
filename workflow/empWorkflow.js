const {pool} = require('../db/config');




const getAllEmployee = async () => {
    var query = "Select * from emp";
    return new Promise((resolve, reject) => {
        pool.query(query,(err,rows)=>{
            if(!err)  resolve (rows);
            else      reject( err);
        })
    }) 
}

module.exports = {getAllEmployee };