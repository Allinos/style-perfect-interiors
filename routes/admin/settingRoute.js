const express = require('express');
const router = express.Router();
const settingsMng = require('../../controllers/settingManager.crud')


router.get('/get-task', settingsMng.getTask);
router.post('/set-task', settingsMng.setTask);

router.get('/get-subtask', settingsMng.getSubtask);
router.post('/set-subtask', settingsMng.setSubtask);
router.put('/upt-subtask/:id', settingsMng.updateSubtask);

router.get('/get-material', settingsMng.getMaterial);
router.post('/set-material', settingsMng.setMaterial);
router.put('/upt-material/:id', settingsMng.updateMaterial);


module.exports = router;