const router = require('express').Router()


router.use('/users', require('./users.route'))

router.use('/auth', require('./auth.route'))

router.use('/imagenes', require('./imagenes.route'))

router.use('/secuencias', require('./secuencias.route'))

router.use('/videos', require('./videos.route'))


module.exports = router