const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    isim: {
        type: String,
        required: 'İsim boş olamaz'
    },
    email: {
        type: String,
        required: 'Email boş olamaz',
        unique: true
    },
    tel: {
        type: String,
        required: 'Tel No boş olamaz',
        unique: true
    },
    parola: {
        type: String,
        required: 'Parola boş olamaz',
    },
    saltSecret: String
});

userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.parola, salt, (err, hash) => {
            this.parola = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

userSchema.methods.verifyPassword = function (parola) {
    return bcrypt.compareSync(parola, this.parola);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}


mongoose.model('User', userSchema);