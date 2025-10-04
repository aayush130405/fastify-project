const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    country: {type: String},
    resetPasswordToken: String,
    resetPasswordExpiry: Date,
})

module.exports = mongoose.model("user", userSchema)