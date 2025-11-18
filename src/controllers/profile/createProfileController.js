import { create, validateProfile } from '../../models/profileModel.js'
import bcrypt from 'bcrypt'


export const createProfileController = async (req, res) => {
    const profile = req.body

    //validar dados
    // validationProfile recebe o 
    const validation = validateProfile(profile, {id: true})
    if(!validation.success){
        return res.status(400).json({
            message: 'Dados inválidos',
            errors: validation.errors
        })
    }

    validation.data.pass = await bcrypt.hash(profile.pass, 10)

    const result = await create(validation.data)
    res.json({
        menssage: 'Usuário Criado com sucesso',
        profile: result
    })
}