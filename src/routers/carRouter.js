import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
        menssage: 'Modelo Criado com sucesso',
        car: dados
    })
})



router.get('/', (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({ message: `modelos listado com sucesso` })
})




router.get('/:id', (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({ message: `Modelo do ${id} consultado com sucesso` })
})



router.put('/:id', (req, res) => {
    const id = req.params.id
    const dados = req.body
    console.log(dados)
    res.json({
    menssage: `${dados.marca} ${dados.modelo} com ${id} alterado`,
        marca: dados.marca,
        modelo: dados.modelo

    })
})



router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: `Modelo com ID ${id} deletado com sucesso` })
})



export default router