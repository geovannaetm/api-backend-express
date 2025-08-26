export const listeProductController = (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({ message: `Produtos listado com sucesso` })
}