// All main index routes

import express from 'express'
const router = express.Router()

import { index } from '../controller'

router.get('/', index)

module.exports = router