import { readdirSync } from 'fs'
import path from 'path'

const getModuleRoutes = source =>
  readdirSync(
    source, { withFileTypes: true }
  )
  .filter(
    dirent => dirent.isDirectory()
  )
  .map(
    dirent => { 
      const url = dirent.name == 'index' ? '' : dirent.name
      const dir = path.join('../../app', dirent.name, 'etc', 'router')
      const handler = require(dir)
      
      return { url: url, handler: handler }
    }
  )

export default getModuleRoutes