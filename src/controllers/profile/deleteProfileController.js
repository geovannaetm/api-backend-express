import { remove } from "../../models/profileModel.js"

export const deleteProfileController = async(req, res) => {
    const id = req.params.id

    // id é uma string, precisa converter para number

    const result = await remove(+id) //ou usar Number(id) ou parseInt(id)

    res.json({ 
        message: `Usuario com ID ${id} deletado com sucesso`,
        profile: result
    })
}