import { resolve } from 'import-meta-resolve'
import path from 'path'

import { fileURLToPath, URL } from 'url'

console.log(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../web'))
console.log(new URL('../web', import.meta.url))
console.log(new URL('../web', import.meta.url).href)

main()

/**
 *
 */
async function main() {
  // A file:
  console.log(await resolve('./package.json', new URL('../web/', import.meta.url).href))
}
