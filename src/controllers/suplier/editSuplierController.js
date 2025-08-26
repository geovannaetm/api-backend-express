export const editSuplierController = (req, res) => {
    const id = req.params.id
    const dados = req.body
    console.log(dados)
    res.json({
        menssage: 'Dados Atulizados com suceso',
        supplier: dados

    })
}