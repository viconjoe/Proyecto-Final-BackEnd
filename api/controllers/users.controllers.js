const Users = require('../models/users.models')

async function getAllUsers(req, res){
    try {
        const users = await Users.findAll()
        if(users){
            return res.status(200).json(users)
        } else {
            res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneUser(req, res){
    try {
        const user = await Users.findByPk(req.params.id)
        if (user) {
            return res.status(200).json(user)
        }else{
            res.status(404).send('User not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteUser (req, res){
    try {
        const user = await Users.destroy({
            where:{
                id: req.params.id
            }
         })
        if (user) {
            return res.status(200). json(user)
        }else{
            res.status(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createUser(req, res){
    try {
        console.log(req.body.user)
        const user = await Users.create(req.body)

        if (user) {
            return res.status(200). json(user)
        }else{
            res.status(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDataUser(req, res){
    try {
        const user = await Users.update(req.body, {
            where:{
                id: req.params.id
            }
       })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {getAllUsers, getOneUser, deleteUser, createUser, updateDataUser}