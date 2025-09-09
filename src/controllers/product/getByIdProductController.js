import { getById } from "../../models/productModel.js"

export const getByIdProductController = async (req, res) => {
  
  const id = req.params.id

    const result = await getById(+id)


    res.json({ message: `Produto do ${id} consultado com sucesso`,
      product : result
     })
  }


  