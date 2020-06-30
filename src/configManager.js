const keys = require('./helpers/keys')
const clone = require('./helpers/clone')
const merge = require('./helpers/merge')
const get = require('./helpers/get')
const defaultConfig = require('./constants/defaultConfig')
const validConfigKeys = require('./constants/validConfigKeys')

const configManager = (customConfig) => {
  const config = merge(validConfigKeys, defaultConfig, customConfig)

  const getConfig = () => clone(config)

  const methods = keys(config).reduce((accumulator, key) => {
    accumulator[key] = () => get(config, key)

    return accumulator
  }, {})

  return {
    ...methods,
    config: getConfig,
  }
}

module.exports = configManager
