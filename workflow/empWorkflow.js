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

const createEmp = async (emp) => {
    var query = "insert into emp(ID,NAME,AGE,ADDRESS,SALARY,user_email,user_pass) values("+emp.ID+",'"+emp.NAME+"','"+emp.AGE+"','"+emp.ADDRESS+"','"+emp.SALARY+"','"+emp.user_email+"','"+emp.user_pass+"')";
    return new Promise((resolve, reject) => {
        pool.query(query,(err,rows)=>{
            if(!err)  resolve (rows);
            else      reject( err);
        })
    }) 
}

module.exports = {getAllEmployee, createEmp };