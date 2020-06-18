require('../Connections/ConnectionDb');

const mongoose = require('mongoose');

const TempSchema = new mongoose.Schema({
    temperature: {type:Number},
    date_received:{type: Date}
})

const TempModel = mongoose.model('Temp', TempSchema, 'temps');

module.exports = TempModel; 