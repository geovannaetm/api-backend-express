export const getByIdSuplierController = (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({ message: `Dados do ${id} consultado com sucesso` })
}