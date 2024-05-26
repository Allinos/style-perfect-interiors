const dbcon = require('../config/db.config')


exports.getIncom_Exp_total = async (req, res) => {
  const q = `SELECT 'normal_projects_finance' AS tName, SUM(amount_got) AS total_amount_got, SUM(CASE WHEN modeofpay='online' THEN amount_got ELSE 0 END) AS online_sum, SUM(CASE WHEN modeofpay='cash' THEN amount_got ELSE 0 END) AS cash_sum FROM normal_projects_finance GROUP BY tName;
  SELECT  SUM(total_price) AS total_sum FROM deals;`
  await dbcon.query(q, (err, result) => {
    if (err) {
      res.status(500).send({ status: false, msg: "some error occurred!.." });
    }
    res.status(200).send({ status: true, msg: "added successfully", data: result })
  })
}


//----------normal project finace----------------

exports.addAmountRecieved = async (req, res) => {
  const q = `INSERT INTO normal_projects_finance (ndeal_id, amount_got, dateofpay, modeofpay) VALUES (?, ?, ?, ?)`
  await dbcon.query(q, [req.body.ndeal_id, req.body.amount_got, req.body.dateofpay, req.body.modeofpay], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send({status:false,mag:"some error occurred!.."});  
    }
    res.status(200).send({msg:"Added Sucessfully"});  
  })
}

exports.updateAmountRecieved = async (req, res) => {
  console.log(req.body);
  const updateData =  [req.body.amount_got, req.body.dateofpay, req.body.modeofpay, req.body.fid]
  const q = `UPDATE normal_projects_finance SET amount_got = ?, dateofpay = ?, modeofpay = ? WHERE fid = ?`
  await dbcon.query(q, updateData, (err, result) => {
    if (err) {
      return res.status(500).send({msg:"some error occurred!.."});  
    }
    return res.status(200).send({msg:"Amount Updated Sucessfully"});
  })
}


exports.deleteAmountRecieved = async (req, res) => {
  const deleteInfo =  [req.query.fid]
  const q = `DELETE FROM normal_projects_finance WHERE fid = ?`
  await dbcon.query(q, deleteInfo, (err, result) => {
    if (err) {
      return res.status(500).send({msg:"some error occurred!.."});  
    }
    return res.status(200).send({msg:"Amount deleted Sucessfully"});
  })
}

