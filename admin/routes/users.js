const express = require('express');
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcrypt-nodejs");
const ObjectId = require('mongodb').ObjectId;
const databaseUrl = "mongodb://localhost:27017/users";
var jwt = require('jsonwebtoken');
var db;

//Conxion a notre base de données (Document users)
MongoClient.connect(databaseUrl, { useNewUrlParser: true })
  .then(client => {
    db = client.db('users');
  }).catch(error => console.error(error));

/* Authetification */
router.post('/signin', (req, res) => {
  db.collection('admin').findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    } else {
      comparePassword(req.body.pass, user.pass, function (err, isMatch) {
        if (isMatch && !err) {
          jwt.sign({ user }, 'secretkey', { expiresIn: '120s' }, (err, token) => {
            if (err) console.error("error lors de la generation du token" + err);
            res.json({ token });
          });
        }
        else {
          res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
});
/*Update account */

// router.put('/updateAcc',(req,res)=>{
//   db.collection('admin')
//   .findOneAndUpdate({name: 'Yoda'}, {
//     $set: {
//       name: req.body.name,
//       quote: req.body.quote
//     }
//   }, {
//     sort: {_id: -1},
//     upsert: true
//   }, (err, result) => {
//     if (err) return res.send(err)
//     res.send(result)
//   })
// });

router.post('/en', (req, res) => {
  let user = {
    email: req.body.email,
    pass: generateHash(req.body.pass)
  }
  db.collection("admin").save(user, (err, user) => {
    if (err) { throw err; }
    res.json(user);
  })
});


/********************************* Fonction  ******************************************* */


/*verfier token */
function verifyToken(req, res, next) {
  const beareHeader = req.headers['authorization'];
  if (typeof beareHeader !== 'undefined') {
    const beare = beareHeader.split(' ');
    const beareToken = beare[1];
    req.token = beareToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

//Fonctions pour hashage et pour comparaisson les deux mot de passes
var generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}
//compare password
var comparePassword = function (pw, pw1, cb) {
  bcrypt.compare(pw, pw1, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
//fin fonction

module.exports = router;
