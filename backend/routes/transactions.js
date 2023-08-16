const { addIncome } = require('../controllers/income');

const router = require('express').Router();


router.post('/add-income', addIncome);


router.get('/', function (req, res) {
    res.send(`Welcome to Router`)
})

module.exports = router
