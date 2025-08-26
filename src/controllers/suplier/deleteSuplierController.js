export const deleteSuplierController =  (req, res) => {
    const id = req.params.id
    res.json({ message: `Fonercedor com ID ${id} deletado com sucesso` })
}