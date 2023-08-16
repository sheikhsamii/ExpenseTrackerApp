const mongoose = require('mongoose');

//Connection with mongoDb with mongoose
const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`DB connected `);
    }
    catch (err) {
        console.log(err, 'Error connecting to server');
    }
}

module.exports = {db}