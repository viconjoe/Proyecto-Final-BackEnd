const Secuencias = require('../models/secuencias.models.js')

async function getAllSecuencias(req, res){
    try {
        const secuencias = await Secuencias.findAll()
        if(secuencias){
            return res.status(200).json(secuencias)
        } else {
            res.status(404).send('Secuences not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneSecuencia(req, res){
    try {
        const secuencia = await Secuencias.findByPk(req.params.id)
        if (secuencia) {
            return res.status(200).json(secuencia)
        }else{
            res.status(404).send('Secuence not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteSecuencia (req, res){
    try {
        const secuencia = await Secuencias.destroy({
            where:{
                id: req.params.id
            }
         })
        if (secuencia) {
            return res.status(200). json(secuencia)
        }else{
            res.status(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createSecuencia(req, res){
    try {
        console.log(req.body.user)
        const secuencia = await Secuencias.create(req.body)

        if (secuencia) {
            return res.status(200). json(secuencia)
        }else{
            res.status(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateDataSecuencia(req, res){
    try {
        const secuencia = await Secuencias.update(req.body, {
            where:{
                id: req.params.id
            }
       })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {getAllSecuencias, getOneSecuencia, deleteSecuencia, createSecuencia, updateDataSecuencia}