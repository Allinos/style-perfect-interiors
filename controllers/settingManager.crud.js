const { log } = require('winston')
const databaseCon = require('../config/db.config')

exports.getTask = async (req, res) => {
   const q = "select * from task"
   await databaseCon.query(q, (err, results) => {
      if (!err) {
         res.status(200).send(results)
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}
exports.setTask = async (req, res) => {
   const q = "INSERT INTO task (task_name) VALUES(?)"
   await databaseCon.query(q, [req.body.taskName], (err, results) => {
      if (!err) {
         res.status(200).send(results)
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}

exports.getSubtask = async (req, res) => {
   const q = "select * from subtask"
   await databaseCon.query(q, (err, results) => {
      if (!err) {
         res.status(200).send(results)
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}

exports.setSubtask = async (req, res) => {
   const q = "INSERT INTO subtask (sub_task_name) VALUES(?)"
   await databaseCon.query(q,[req.body.subTask],(err,results) => {
      if (!err) {
         res.status(200).send({ status: true, msg: 'Successfully added Sub-Task', data: results.insertId })
      } else {
         res.status(500).send({ status: false, msg: "Internal error occurs!" });
      }
   })
}
exports.updateSubtask = async (req, res) => {
   const q = `UPDATE subtask SET sub_task_name=?  WHERE sub_task_id =${req.params.id}`
   await databaseCon.query(q,[req.body.subTask],(err,results) => {
      if (!err) {
         res.status(200).send({ status: true, msg: 'Successfully Updated Sub-Task', data: results.insertId })
      } else {
         res.status(500).send({ status: false, msg: "Internal error occurs!" });
      }
   })
}

exports.getMaterial = async (req, res) => {
   const q = "select material_name from material_names"
   await databaseCon.query(q, (err, results) => {
      if (!err) {
         res.status(200).send({ status: true, msg: 'Successfully added Miscellaneous Task',data:results })
      } else {
         res.status(500).send({ status: false, msg: "Internal error occurs!" });
      }
   })

}
exports.setMaterial = async (req, res) => {
   const q = "INSERT INTO material_names (material_name) VALUES(?)"
   await databaseCon.query(q, [req.body.splitValue],
      (err, results) => {
         if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully added Split Ratio', data: results.insertId })

         } else {
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
         }
      })

}
exports.updateMaterial = async (req, res) => {
   const q = `UPDATE material_names SET  material_name =?  WHERE mnid =${req.params.id}`
   await databaseCon.query(q, [req.body.splitValue],
      (err, results) => {
         if (!err) {
            res.status(200).send({ status: true, msg: 'Successfully added Split Ratio', data: results.insertId })

         } else {
            res.status(500).send({ status: false, msg: "Internal error occurs!" });
         }
      })

}
