import { list } from "../../models/profileModel.js"   

export const listeProfileController =  async (req, res) => {

    const result = await list()

    
    res.json({ 
        message: 'Usuários listado com sucesso',
        profile: result
    })
}