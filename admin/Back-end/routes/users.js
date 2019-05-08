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
      comparePassword(req.body.password, user.password, function (err, isMatch) {
        if (isMatch && !err) {
           res.json(user);
        }
        else {
          res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
});
/*Update account */

router.put('/editAccount/:email',(req,res)=>{
  db.collection('admin')
  .findOneAndUpdate({email: req.params.email}, {
    $set: {
      email:req.body.email, 
      firstName:req.body.firstName,
      password:generateHash(req.body.password),
    }
  }, (err, result) => {
    if (err) return res.send(err)
    res.send({msg : "User Updated", res:result});
  })
});

// router.post('/en', (req, res) => {
//   let user = {
//     email: req.body.email,
//     firstName:req.body.firstName,
//     password: generateHash(req.body.pass)
//   }
//   db.collection("admin").save(user, (err, user) => {
//     if (err) { throw err; }
//     res.json(user);
//   })
// });

router.get('/usersProf',(req,res)=>{
  db.collection('user').find({type:"professeur"}).toArray((err, result) => {
    res.json(result);
})
});
router.delete('/prof/:id', (req, res) => {
   db.collection('user').remove({_id:ObjectId(req.params.id)},(err,obj)=>{
    if (err) res.status(400).send({success:false,msg:"User not removed"});
    res.status(200).send({success:true,obj});
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
