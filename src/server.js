import express from 'express'

const app = express()
const port = 3000

app.use(express.json())



app.get('/profile', (req, res) => {
  console.log('Foi feito um GET no /GET')
  res.json({profile:'Dados listados com suceso'})
})

app.post('/profile', (req, res) => {
  const dados = req.body
  res.json({
    mensagem:'Dados Criados com suceso',
    profile: dados
  })
})

app.put('/profile', (req, res) => {
  const dados = req.body
  console.log(dados)
  res.json({
    mensagem:'Dados Atulizados com suceso',
    profile: dados

  })
})

app.delete('/profile', (req, res) => {
  console.log('Foi feito um DELETE no /DELETE')
  res.json({profile:'Dados Deletados com suceso'})
})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
