import express from 'express'
import { createCustomerController } from '../controllers/customer/createCustomerController.js'
import { listeCustomerController } from '../controllers/customer/listeCustomerController.js'
import { getByIdCustomerController } from '../controllers/customer/getByIdCustomerController.js'
import { editCustomerController } from '../controllers/customer/editCustomerController.js'
import { deleteCustomerController } from '../controllers/customer/deleteCustomerController.js'

const router = express.Router()

router.post('/', createCustomerController)
router.get('/', listeCustomerController)
router.get('/:id', getByIdCustomerController)
router.put('/:id', editCustomerController)
router.delete('/:id', deleteCustomerController)

export default router
