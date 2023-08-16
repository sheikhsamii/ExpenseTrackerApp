const IncomeSchema = require('../models/IncomeModel');

exports.addIncome = async (req, res) => {
    const { title, amount, type, Date, category, description } = req.body

    const income = new IncomeSchema({
        title,
        amount,
        type,
        Date,
        description,
        category
    })


    try {
        if (!title || !type || !Date || !description) {
            return res.status(400).json({ message: 'Please fill all the fields' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount cannot be negative' })
        }
        await income.save()
        res.status(200).json({ message: 'Income saved successfully' })
    } catch (error) {
        console.log(error)
    }

    console.log(income, 'Created Income')
}