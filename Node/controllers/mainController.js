const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Kullanici = mongoose.model('User');

module.exports.kaydet = function(req, res,next){
    console.log(req.body.isim);
    var kullanici = new Kullanici();
    kullanici.isim = req.body.isim;
    kullanici.email = req.body.email;
    kullanici.tel = req.body.tel;
    kullanici.parola = req.body.parola;

    kullanici.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            return next(err);
        }

    });
}
module.exports.listele = function(req, res, next) {
    Kullanici.find(function(err, result){
        res.send(result);
        next();
    });
}
module.exports.authenticate = function(req, res,next){
    // call for passport authentication
    passport.authenticate('local', function(err, user, info){       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}
module.exports.kullaniciSayfasi = function(req, res,next){
    Kullanici.findOne({ _id: req._id },
        function(err, user){
            if (!user)
                return res.status(404).json({ status: false, message: 'Kullanici bulunamadı.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['isim','tel','email']) });
        }
    );
}