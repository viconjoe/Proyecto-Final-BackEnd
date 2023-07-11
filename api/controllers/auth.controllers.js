const Users = require('../models/users.models')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function signUp(req, res){
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const user = await Users.create(req.body)
        const token = jwt.sign({email: user.email}, "secret", {
            expiresIn: "7d"
        })
        res.status(200).json({token, user})
    } catch (error) {
       console.log(error)
       res.status(500).send("Error authenticating user")
       throw new Error(error) 
    }
}

async function login(req, res){
    try {
        console.log(req.body)
         const user = await Users.findOne({
      where: { email: req.body.email }
    })
    if (!user) {
      return res.status(400).send("user email or password incorrect")
    }
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(400).send("user email or password incorrect")
      }
      const token = jwt.sign({ email: user.email }, "secret", {expiresIn: "7d"})
      res.status(200).json({token})
    })
    } catch (error) {
       console.log(error)
       res.status(500).send("Error loging user")
       throw new Error(error) 
    }
}

module.exports = {signUp, login}

