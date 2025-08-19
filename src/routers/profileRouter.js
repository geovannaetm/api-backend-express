import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
        menssage: 'Usuário Criado com sucesso',
        profile: dados
    })
})



router.get('/', (req, res) => {
    console.log('Foi feito um GET no /GET')
    res.json({ message: `Usuários listado com sucesso` })
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
        profile: dados

    })
})



router.delete('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: `Usuario com ID ${id} deletado com sucesso` })
})



export default router