import express from 'express'
import { createProd, fetchProd, updateProd } from '../controller/prodController.js'

const prodRoute = express.Router()

prodRoute.post('/create',createProd)
prodRoute.get('/',fetchProd)
prodRoute.put('/update/:id',updateProd)

export default prodRoute