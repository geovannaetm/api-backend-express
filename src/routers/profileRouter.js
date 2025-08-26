import express from 'express'
import { createProfileController } from '../controllers/profile/createProfileController.js'
import { listeProfileController } from '../controllers/profile/listeProfileController.js'
import { getProfileByIdController } from '../controllers/profile/getProfileByIdController.js'
import { editProfileController } from '../controllers/profile/editProfileController.js'
import { deleteProfileController } from '../controllers/profile/deleteProfileController.js'


const router = express.Router()

router.post('/', createProfileController)
router.get('/', listeProfileController)
router.get('/:id', getProfileByIdController)
router.put('/:id', editProfileController)
router.delete('/:id', deleteProfileController)


export default router