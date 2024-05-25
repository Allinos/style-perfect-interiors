const express = require('express');
const materialRouter = express.Router();
const materialController = require('../../controllers/material.manager')

// project data routes for inventory
materialRouter.get('/get-pname-from-ref', materialController.getProjectNameThroughRef);
materialRouter.get('/get-all-ref', materialController.getAllRef);

// project stock routes
materialRouter.post('/add-material-to-project', materialController.addMatrialsToProject);
materialRouter.get('/get-material-from-project', materialController.getMatrialsToProject);
materialRouter.put('/update-material-to-project', materialController.updateMatrialsToProject);
materialRouter.delete('/remove-material-from-project', materialController.deleteMatrialsToProject)

// left stock routes
materialRouter.post('/add-material-to-leftstock', materialController.addMatrialsToLeftStock);
materialRouter.get('/get-material-from-leftstock', materialController.getMatrialsFromLeftStock);
materialRouter.put('/update-material-to-leftstock', materialController.updateMatrialsToLeftStock)
materialRouter.delete('/remove-material-from-leftstock', materialController.removeMatrialsFromLeftStock)


// material list routes
materialRouter.post('/add-material-to-list', materialController.addMatrialsToList);
materialRouter.get('/get-material-from-list', materialController.getMatrialsFromList);
materialRouter.delete('/remove-material-from-list', materialController.deleteMatrialsToList)



module.exports= materialRouter;