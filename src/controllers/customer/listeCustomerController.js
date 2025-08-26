export const listeCustomerController = (req, res) => {
    try {
        // TODO: Implement customer listing logic
        const customers = []
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
