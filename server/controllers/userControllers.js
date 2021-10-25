const User = require("../models/userModel");


const createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(409).send({ error: "Ooops something went wrong!" })
    }

}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findByCredentials(email, password)

        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send({ error: "Your username and/or password do not match" })
    }

}




const getAllUsers = async (req, res) => {
    res.send(req.user)
}


const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
        await req.user.save();
        res.send()
    } catch (error) {
        res.status(500).send()
    }
}




module.exports = { createUser, getAllUsers, loginUser, logout }