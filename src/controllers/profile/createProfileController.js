export const createProfileController = (req, res) => {
    const dados = req.body
    res.json({
        menssage: 'Usuário Criado com sucesso',
        profile: dados
    })
}