export const editProductController =  (req, res) => {
    const id = req.params.id
    const dados = req.body
    console.log(dados)
    res.json({
      menssage: `Produtos ${id} Atulizados com suceso`,
      product: dados
  
    })
}