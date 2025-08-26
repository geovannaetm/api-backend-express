export const createSuplierController = (req, res) => {
    const dados = req.body
    res.json({
        menssage: 'Fonercedor Criado com sucesso',
        supplier: dados
    })
}