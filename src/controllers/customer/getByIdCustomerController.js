export const getByIdCustomerController = (req, res) => {
    try {
        // TODO: Implement get customer by id logic
        const { id } = req.params
        const customer = { id }
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
