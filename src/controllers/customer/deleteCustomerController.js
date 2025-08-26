export const deleteCustomerController = (req, res) => {
    try {
        // TODO: Implement customer deletion logic
        const { id } = req.params
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
