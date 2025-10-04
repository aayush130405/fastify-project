const User = require("../models/user.js")
const crypto = require("crypto")
const bcrypt = require("bcryptjs")

exports.register = async(request, reply) => {
    try {
        //validate body
        const {name, email, password, country} = request.body

        //hash pass
        const hashedPassword = await bcrypt.hash(password, 12)

        //creating user in db
        const user = new User({name, email, password: hashedPassword, country})
        await user.save()

        //send reply
        reply.code(201).send({message: "User registered successfully!!!"})
    } catch (err) {
        reply.send(err)
    }
}

exports.login = async(request, reply) => {
    try {
        //validate body
        const {email, password} = request.body

        //find user
        const user = await User.findOne({email})
        if(!user) {
            return reply.code(404).send({message: "Invalid email or password"})
        }

        //validate password
        const isPasswordValid = await bcrypt.compare(password, user.hashedPassword)
        if(!isPasswordValid) {
            return reply.code(400).send({message: "Invalid email or password"})
        }
        
    } catch (err) {
        reply.send(err)
    }
}