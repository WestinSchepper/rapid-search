const keys = require('../helpers/keys')
const defaultConfig = require('./defaultConfig')

const validConfigKeys = keys(defaultConfig)

module.exports = validConfigKeys
