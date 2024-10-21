import Config from 'react-native-config'
import staging from './environments/staging.json'
import production from './environments/production.json'
import development from './environments/development.json'
import { DEVELOPMENT_ENV } from './constants'

type JsonMap = {
  [key: string]: string
}

const configs: { [key: string]: JsonMap } = {
  development: { ...development },
  staging: { ...staging },
  production: { ...production },
}

const getCurrentEnv = (): string => {
  if (!Config.ENV) {
    return DEVELOPMENT_ENV
  }
  return Config.ENV
}

const getCurrentEnvConfig = (): JsonMap => {
  const env = getCurrentEnv()
  return configs[env]
}

let currentEnv = getCurrentEnv()

let currentEnvConfig = configs[currentEnv]

export { getCurrentEnv, getCurrentEnvConfig, currentEnv, currentEnvConfig }
