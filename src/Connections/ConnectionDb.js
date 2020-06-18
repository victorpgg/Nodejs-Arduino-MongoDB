require('dotenv/config');

const mongoose = require('mongoose');

db = getConnect();

async function getConnect(){
    return await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
}

module.exports = db;