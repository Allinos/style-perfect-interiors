const db = require('../config/db.config');

// Used in project

// INSERT INTO `deals` (`deal_name`, `reference_no`, `contact`, `agreement_amount`, `work_name`, `email`, `city`, `total_price`) VALUES ('name xinm', '110', '909090', '3000', 'kapil dev', 'dev@gmail.com', 'ghy', '30000');

exports.addMatrialsToProject = async (req, res) => {
   const data = [[1, 'gum', '1pc', 200], [1, 'rope', '3pc', 100], [1, 'color', '1ltr', 700]]
   const q = "INSERT INTO material_used (ndeal_id, material_name, quantity, price) VALUES ?"
   await db.query(q, [data], (err, results) => {
      if (!err) {
         res.status(200).send({msg : 'Materials inserted successfully!'})
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}

exports.getMatrialsToProject = async (req, res) => {
    const q = "select * from material_used"
    await db.query(q, (err, results) => {
       if (!err) {
          res.status(200).send(results)
       } else {
          res.status(500).send({ msg: "Internal error occurs!" });
       }
    })
 }

 
exports.updateMatrialsToProject = async (req, res) => {
   const q = "update material_used set material_name=?, quantity=?,  price=? where muid=? and ndeal_id=?"
   await db.query(q, ['Plastic bag', '2kg', 300, 1, 1], (err, results) => {
      if (!err) {
         res.status(200).send({msg : "Material updated successfully!"})
      } else {
         console.log(err);
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}


// left in project

exports.addMatrialsToLeftStock = async (req, res) => {
    const q = "select * from task"
    await db.query(q, (err, results) => {
       if (!err) {
          res.status(200).send(results)
       } else {
          res.status(500).send({ msg: "Internal error occurs!" });
       }
    })
 }

 exports.getMatrialsFromLeftStock = async (req, res) => {
    const q = "select * from task"
    await db.query(q, (err, results) => {
       if (!err) {
          res.status(200).send(results)
       } else {
          res.status(500).send({ msg: "Internal error occurs!" });
       }
    })
 }

 //---- Material list Table Data ----

 exports.addMatrialsToList = async (req, res) => {
   const q = "select * from task"
   await db.query(q, (err, results) => {
      if (!err) {
         res.status(200).send(results)
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}

exports.getMatrialsFromList = async (req, res) => {
   const q = "select * from material_names"
   await db.query(q, (err, results) => {
      if (!err) {
         res.status(200).send(results)
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}