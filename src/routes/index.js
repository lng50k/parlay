// Main router entry point, sets up all route modules

import express from 'express'
import getModuleRoutes from './modules'

const router = express.Router()
const routes = getModuleRoutes('src/app')

routes.map(route => {
    router.use(route.url, route.handler)
})

module.exports = router