const router = require('express').Router()

const {getAllUsers, getOneUser, deleteUser, createUser, updateDataUser} = require('../controllers/users.controllers')

router.get('/', getAllUsers)

router.get('/:id', getOneUser)

router.delete('/:id', deleteUser)

router.post('/', createUser)

router.put('/:id', updateDataUser)

module.exports = router