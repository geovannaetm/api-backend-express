import { list } from "../../models/productModel.js"

export const listeProductController = async(req, res) => {

    const result = await list()

   
    res.json({ message: `Produtos listado com sucesso`,
    product: result
     })
}