import express from 'express'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import carRouter from './routers/carRouter.js'
import customerRouter from './routers/customerRouter.js'
import cors from 'cors'
import { logger } from './middleware/logger.js'
import authRouter from './routers/authRouter.js'



const app = express()
const port = 3333

app.use(logger)

app.use(cors())

app.use(express.json())

app.use('/auth', authRouter )
app.use('/profile', profileRouter)
app.use('/product', productRouter)
app.use('/supplier', supplierRouter)
app.use('/car', carRouter)
app.use('/customer', customerRouter)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
