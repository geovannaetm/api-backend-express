export const listeSupplierController = (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({ message: `Fornecedores listado com sucesso` })
}