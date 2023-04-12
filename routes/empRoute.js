
const express = require ('express');
const empRoute = express.Router();
const empWorkflow = require ('../workflow/empWorkflow');
const pool = require('../db/config');


empRoute.get("/show", async (req, res) => {
    try {
      const allShow = await empWorkflow.getAllEmployee();
      res.json(allShow.rows);
    } catch (err) {
      res.json(err.message);
    }
  });

  empRoute.post('/create-emp', async (req, res) => {
    try {
        const {ID,NAME,AGE,ADDRESS,SALARY,user_email,user_pass} = req.body;
        var result = {ID,NAME,AGE,ADDRESS,SALARY,user_email,user_pass};
        const user =  await empWorkflow.createEmp(result); 
      //  console.log('User Register successfully')
        res.json({message: "Registered successfully "}); 
    } catch (err) {
        res.json(err.message);
    }
})


module.exports = empRoute;

