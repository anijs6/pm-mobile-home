const { json } = require('mrm-core')
const fs = require('fs')
const path = require('path')

module.exports = function AliasTask() {
  const aliasFilePath = path.resolve(process.cwd(), 'alias.config.js')
  const aliasFileExist = fs.existsSync(aliasFilePath)
  if (!aliasFileExist) return false
  const aliasContent = require(aliasFilePath)
  syncTsConfigJson(aliasContent)
}

/**
 * @param alias
 */
function syncTsConfigJson(alias = {}) {
  const tsConfigFile = json('tsconfig.json')
  if (!tsConfigFile.exists()) return false

  const tsConfigPaths = {}
  for (const aliasKey in alias) {
    tsConfigPaths[pathAppend(aliasKey, '*')] = pathAppend(alias[aliasKey], '*')
  }
  tsConfigFile.merge({
    compilerOptions: {
      paths: tsConfigPaths
    }
  })
}

/**
 * @param pathStr
 * @param suffix
 */
function pathAppend(pathStr, suffix) {
  if (pathStr.endsWith('/')) return `${pathStr}${suffix}`
  return `${pathStr}/${suffix}`
}
