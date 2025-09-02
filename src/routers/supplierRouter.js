import express from 'express'
import { createSupplierController } from '../controllers/supplier/createSupplierController.js'
import { listeSupplierController } from '../controllers/supplier/listeSupplierController.js'
import { getSupplierByIdController } from '../controllers/supplier/getByIdSupplierController.js'
import { editSupplierController } from '../controllers/supplier/editSupplierController.js'
import { deleteSupplierController } from '../controllers/supplier/deleteSupplierController.js'


const router = express.Router()

router.post('/', createSupplierController)



router.get('/', listeSupplierController)




router.get('/:id', getSupplierByIdController)



router.put('/:id', editSupplierController)



router.delete('/:id', deleteSupplierController)



export default router