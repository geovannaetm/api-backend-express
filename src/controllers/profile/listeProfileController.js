export const listeProfileController = (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({ message: `Usuários listado com sucesso` })
}