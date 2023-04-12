
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

module.exports = empRoute;

