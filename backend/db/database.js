const mongoose = require('mongoose')
var colors = require('colors');

const connectDB = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
    }).then((data)=> {
        console.log(`mongodb connected with server ${data.connection.host}`.brightYellow.bold.underline)
    })
}

module.exports = connectDB