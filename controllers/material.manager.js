const db = require('../config/db.config');

// Used in project

exports.getProjectNameThroughRef = async (req, res)=> {
   const query = `select deal_name, work_name from deals where reference_no = ?`
   await db.query(query, [req.query.ref], (err, results) => {
      if (!err) {
         res.status(200).send(results)
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   }
)
}


exports.getAllRef = async (req, res)=> {
   const query = `select reference_no, id from deals`
   await db.query(query, [req.query.ref], (err, results) => {
      if (!err) {
         res.status(200).send(results)
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   }
)
}


exports.addMatrialsToProject = async (req, res) => {
   const data = []
   req.body && req.body.items.forEach(elem => {
      data.push([req.body.pid, elem.item, elem.qnt, elem.amount])
   });
   const q = "INSERT INTO material_used (ndeal_id, material_name, quantity, price) VALUES ?"
   await db.query(q, [data], (err, results) => {
      if (!err) {
         res.status(200).send({ msg: 'Materials inserted successfully!' })
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}

exports.getMatrialsToProject = async (req, res) => {
   const q = "select * from material_used where ndeal_id = ?"
   await db.query(q, [req.query.pid], (err, results) => {
      if (!err) {
         res.status(200).send(results)
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}


exports.updateMatrialsToProject = async (req, res) => {
   const q = "update material_used set material_name=?, quantity=?, price=? where muid=? and ndeal_id=?"
   await db.query(q, [req.body.item, req.body.qnt, req.body.amount, req.body.materialid, req.body.pid], (err, results) => {
      if (!err) {
         res.status(200).send({ msg: "Material updated successfully!" })
      } else {
         console.log(err);
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}


// left in project

exports.addMatrialsToLeftStock = async (req, res) => {
   const data = []
   req.body && req.body.items.forEach(elem => {
      data.push([req.body.pid, elem.item, elem.qnt, elem.amount])
   });
   const q = "INSERT INTO material_left (ndeal_id, material_name, quantity, price) VALUES ?"
   await db.query(q, [data], (err, results) => {
      if (!err) {
         res.status(200).send({ msg: 'Materials inserted to left successfully!' })
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}

exports.getMatrialsFromLeftStock = async (req, res) => {
   const q = "select * from material_left where ndeal_id = ?"
   await db.query(q, [req.query.pid], (err, results) => {
      if (!err) {
         res.status(200).send(results)
      } else {
         res.status(500).send({ msg: "Internal error occurs!" });
      }
   })
}

//---- Material list Table Data ----

exports.addMatrialsToList = async (req, res) => {
   const q = "INSERT INTO material_names (material_name) VALUES (?)"
   await db.query(q, [req.body.material], (err, results) => {
      if (!err) {
         res.status(200).send({msg : "Materials added successfully"})
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