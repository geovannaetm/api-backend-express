export const createCustomerController = (req, res) => {
    try {
        // TODO: Implement customer creation logic
        const customer = req.body
        res.status(201).json(customer)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
