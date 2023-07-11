const router = require('express').Router()
const {signUp, login} = require ('../controllers/auth.controllers')

router.post('/login', login)
router.post('/signup', signUp)

module.exports = router