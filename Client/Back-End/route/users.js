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


/*Inscription dans notre base de données */
router.post('/register', (req, res) => {
    var user = req.body;
     var usr = {
        email: user.email,
                pass: generateHash(user.pass)
     }
    // if (user.type === 'etudiant') {
    //     var userE = {
    //         type: "etudiant",
    //         nom: user.nom,
    //         prenom: user.prenom,
    //         email: user.email,
    //         dateNaissance: user.dateNaissance,
    //         genre: user.genre,
    //         cne: user.cne,
    //         filiere: user.filiere,
    //         pass: generateHash(user.pass),
    //         confpass: generateHash(user.confpass)
    //     }
        db.collection('user').findOne({
            email: req.body.email
        }, function (err, userr) {
            if (err) throw err;
            if (userr) {
                res.status(401).send({ success: false, msg: 'Email exsit.' });
            } else {
                db.collection('user').save(usr, function (err, useer) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(useer);
                });
            }
        })
    // } else if (user.type === 'professeur') {
    //     var userP = {
    //         type: "professeur",
    //         nom: user.nom,
    //         prenom: user.prenom,
    //         email: user.email,
    //         dateNaissance: user.dateNaissance,
    //         genre: user.genre,
    //         pass: generateHash(user.pass),
    //         confpass: generateHash(user.confpass),
    //         prof: {
    //             cni: user.cni,
    //             module: user.module
    //         }
    //     }

    //     db.collection('user').save(userP, function (err, userE) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.json(userE);
    //     });

    // }
});

/* Authetification */
router.post('/signin', (req, res) => {
    db.collection('user').findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            comparePassword(req.body.pass, user.pass, function (err, isMatch) {
                if (isMatch && !err) {
                    jwt.sign({ user }, 'secretkey', { expiresIn: '10h' }, (err, token) => {
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


/*Test home with token */
router.get('/home', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json(
                {
                    msg: 'home ..',
                    nom: authData.user.nom
                }
            );
        }
    });

});



/* Get all users for admin */
router.get('/user',verifyToken, (req, res) => {
    const collection = db.collection("user");
    jwt.verify(req.token, 'secretkey', (err) => {
        if (err) {
            console.log('====================================');
            console.log("Error lors de verificationde token");
            console.log('====================================');
            res.sendStatus(403);
        } else {
            collection.find({}).toArray()
                .then(response => res.status(200).json(response))
        }
    });
});





/*get user by id */
router.get('/profile/:id', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            db.collection('user').find({ _id: ObjectId(req.params.id) })
                .toArray(function (err, result) {
                    if (result.lenght !== 0) res.json(result);
                    else res.json("User not found");
                });
        }
    });


});

/*Delete user by id */
router.delete('/profile/:id', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err) => {
        if (err) {
            res.sendStatus(403);
        } else {
            db.collection('user').deleteOne({ _id: ObjectId(req.params.id) }, (err) => {
                if (err) {
                    res.send(err);
                }
                res.json({ success: true, msg: "user removed by succesfully" });
            })

        }
    });

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