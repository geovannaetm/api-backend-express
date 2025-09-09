import { getById } from "../../models/profileModel.js"

export const getProfileByIdController = async (req, res) => {

    const id = req.params.id

    const result = await getById(+id)

    res.json({ message: `Dados do ID ${id} consultado com sucesso`, 
    profile: result
    })
}