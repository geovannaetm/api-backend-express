import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
        menssage: 'Fonercedor Criado com sucesso',
        supplier: dados
    })
})



router.get('/', (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({ message: `Fornecedores listado com sucesso` })
})




router.get('/:id', (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({ message: `Dados do ${id} consultado com sucesso` })
})



router.put('/:id', (req, res) => {
    const id = req.params.id
    const dados = req.body
    console.log(dados)
    res.json({
        menssage: 'Dados Atulizados com suceso',
        supplier: dados

    })
})



router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: `Fonercedor com ID ${id} deletado com sucesso` })
})



export default router