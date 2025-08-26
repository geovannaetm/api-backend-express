export const getByIdProductController =  (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({ message: `Produto do ${id} consultado com sucesso` })
  }