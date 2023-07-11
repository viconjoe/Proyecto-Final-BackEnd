const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('Picto_Plan_Kids', 'viconjoe', 'reboot', {
  host: 'localhost',
  dialect: 'mysql'
});

async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log('Connection to database has been started correctly')
    }
    catch (error){
        throw error
    }
}

async function syncModels(value) {
    const state = {
        alter: {alter: true},
        force: {force: true}
    }
    try {
        await sequelize.sync(state[value] || '')
        console.log(`All models were synchronized successfully using sunc(${JSON.stringify(state[value]) || ''})`)
    } catch (error) {
        throw error
    }
}


module.exports = { sequelize, checkConnection, syncModels }