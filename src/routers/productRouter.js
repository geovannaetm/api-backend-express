import express from 'express'
import { createProductController } from '../controllers/product/createProductController.js'
import { listeProductController } from '../controllers/product/listeProductController.js'
import { getByIdProductController } from '../controllers/product/getByIdProductController.js'
import { editProductController } from '../controllers/product/editProductController.js'
import { deleteProductController } from '../controllers/product/deleteProductController.js'

const router = express.Router()

router.post('/', createProductController)
router.get('/', listeProductController)
router.get('/:id', getByIdProductController)
router.put('/:id', editProductController)
router.delete('/:id', deleteProductController)


export default router