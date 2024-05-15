const express = require('express');
const materialRouter = express.Router();
const materialController = require('../../controllers/material.manager')

// project stock routes
materialRouter.post('/add-material-to-project', materialController.addMatrialsToProject);
materialRouter.get('/get-material-from-project', materialController.getMatrialsToProject);
materialRouter.put('/update-material-from-project', materialController.updateMatrialsToProject);

// left stock routes
materialRouter.post('/add-material-to-leftstock', materialController.addMatrialsToLeftStock);
materialRouter.get('/get-material-from-leftstock', materialController.getMatrialsFromLeftStock);

// material list routes

materialRouter.post('/add-material-to-list', materialController.addMatrialsToList);
materialRouter.get('/get-material-from-list', materialController.getMatrialsFromList);



module.exports= materialRouter;