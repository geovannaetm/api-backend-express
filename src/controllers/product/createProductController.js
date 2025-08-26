export const createProductController = (req, res) => {
    const dados = req.body
    res.json({
      menssage: 'Produto Criado com sucesso',
      product: dados
    })
}

