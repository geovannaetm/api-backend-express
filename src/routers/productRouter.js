import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
      menssage:'Produto Criado com sucesso',
      product: dados
    })
  })


  
router.get('/', (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({message:`Produtos listado com sucesso`})
  })
  


  
router.get('/:id', (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({message:`Produto do ${id} consultado com sucesso`})
  })
  


  router.put('/:id', (req, res) => {
    const id = req.params.id
    const dados = req.body
    console.log(dados)
    res.json({
      menssage:`Produtos ${id} Atulizados com suceso`,
      product: dados
  
    })
  })  



  router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({message: `Produtos com ID ${id} deletado com sucesso` })
  })  



  export default router