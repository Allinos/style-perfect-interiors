const express = require('express');
const api = express.Router();
const pmNormalAPI = require('../../controllers/pm.normal.crud')

//-------normal project employee --------
api.get('/employee/:dealId/:catId', pmNormalAPI.getEmployListPerProject)
api.get('/get-employee', pmNormalAPI.getEmployListToaddOrRemove)
api.post('/add-employee-to-project', pmNormalAPI.addEmployeeToProject)
api.delete('/removeempnp', pmNormalAPI.removeEmployeeToProject)
api.get('/get-contract-emp-to-project', pmNormalAPI.getContractEmployeePerProject)
api.post('/add-contract-employee', pmNormalAPI.addContractualEmp)
api.delete('/delete-contract-employee', pmNormalAPI.removeContractualEmp)

//-------normal project subtask --------
api.post('/addsubtaskto-nproject', pmNormalAPI.addNewSubTaskToProject)
api.put('/update-subtask-status', pmNormalAPI.updateSubtaskStatus)
api.delete('/delete-subtask', pmNormalAPI.deleteSubtask)

//-------normal project task --------
// api.post('/addtaskto-nproject', pmNormalAPI.addNewSubTaskToProject)
api.put('/update-task-status', pmNormalAPI.updatetaskStatus)
api.put('/update-task-deadline', pmNormalAPI.updatetaskDeadline)
api.delete('/delete-task', pmNormalAPI.deleteTask)
api.get('/ngetProjectStatus', pmNormalAPI.getProjectsStaus)
api.get('/nIsProjectPaid', pmNormalAPI.getCheckCompletedUnpaid)


// -----Update task route for bith normal and misc task-----

api.get('/get-data-update', pmNormalAPI.getDataToUpdate)
api.put('/np-data-update', pmNormalAPI.UpdateNormalProjectData)


module.exports = api