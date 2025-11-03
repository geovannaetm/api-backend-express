import { create } from '../../models/profileModel.js'
import bcrypt from 'bcrypt'


export const createProfileController = async (req, res) => {
    const profile = req.body

    profile.pass = await bcrypt.hash(profile.pass, 10)


    const result = await create(profile)

    res.json({
        menssage: 'Usuário Criado com sucesso',
        profile: result
    })
}