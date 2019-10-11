const moongose = require('mongoose');
const { Schema } = moongose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    user: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

//Función con callback de ECMASCRIPT 5 dado que se está usando la expresión "this" para comparar datos
UserSchema.methods.validatePassword = function (password) { 
    return bcrypt.compare(password, this.password);
}

module.exports = moongose.model('User', UserSchema);