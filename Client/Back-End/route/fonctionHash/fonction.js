var bcrypt = require('bcrypt-nodejs');



class User{
//hash password
generateHash (password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}
//compare password
comparePassword  (pw,pw1, cb) {
    bcrypt.compare(pw,pw1, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
}


module.exports = User;
