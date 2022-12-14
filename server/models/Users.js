const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    first: {
        type: String,
        require: true,
    },
    last: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;