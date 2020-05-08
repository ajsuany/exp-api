const mongoose = require('mongoose')

console.log("Reading from db config file.........");

mongoose.connect('mongodb://127.0.0.1:27017/db_name',{
    
    useNewUrlParser: true,
    useUnifiedTopology: true, // to get rid of some warning
    useFindAndModify: false // to get rid of some warning
})


const dbConnection = mongoose.connection

dbConnection.on('error', () => {
    console.log("Error while connecting to db........");
})

dbConnection.on('open', () => {
    console.log("DB connection stablished successfully.....");
})