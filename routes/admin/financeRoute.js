const express = require('express');
const router = express.Router();
const fControl = require('../../controllers/financeManager.crud')

router.use(express.urlencoded({extended: false}))
router.use(express.json());

router.post('/add-payments', fControl.addAmountRecieved)
router.put('/update-payments', fControl.updateAmountRecieved)
router.delete('/delete-payments', fControl.deleteAmountRecieved)
router.get('/get-income-expense', fControl.getIncom_Exp_total)

module.exports = router;