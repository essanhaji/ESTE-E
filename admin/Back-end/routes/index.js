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

/* GET users listing. */
router.get('/home', verifyToken,function(req, res, next) {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            var nbrEt = db.collection('user').find( { type:'etudiant'} ).count();
            res.send(nbrEt);
        }
    });
});



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


module.exports = router;
