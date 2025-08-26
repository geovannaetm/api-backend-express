export const editCustomerController = (req, res) => {
    try {
        // TODO: Implement customer update logic
        const { id } = req.params
        const updatedCustomer = req.body
        res.status(200).json({ id, ...updatedCustomer })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
