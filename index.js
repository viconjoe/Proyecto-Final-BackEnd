require('dotenv')
const { sequelize, checkConnection, syncModels } = require('./database/index')
const addRelationsModels = require('./database/relations')

const express = require('express')
const cors = require('cors')
const morgan = require ('morgan')

async function checkAndSyncAndAddRelations(){
    try {
        await  checkConnection()
        addRelationsModels()
        await syncModels()
    } catch (error) {
        throw error
    }
}

function initialAndListenExpress() {
    try {
        const app = express()
        .use(cors())
        .use(morgan('dev'))
        .use(express.json())
        .use('/api', require('./api/routes'))

        .listen(3000, () => {
            console.log('>listening on port 3000')
        })

    } catch (error) {
        throw error
    }
}

async function startApi(){
    try {
        await checkAndSyncAndAddRelations()
        initialAndListenExpress()
    } catch (error) {
        throw error
    }
}

startApi()