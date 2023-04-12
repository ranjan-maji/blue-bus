
const express = require ('express');
const empRoute = express.Router();
const empWorkflow = require ('../workflow/empWorkflow');

empRoute.get('/show', async (req, res) => {
    try {
        let user =  await empWorkflow.getAllEmployee();
        res.status(200).send(user); 
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = empRoute;

