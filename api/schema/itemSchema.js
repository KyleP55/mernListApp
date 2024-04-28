const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    owner: {
        type: String,
        require: false,
        default: 'Anon'
    },
});

module.exports = mongoose.model('Items', itemSchema);