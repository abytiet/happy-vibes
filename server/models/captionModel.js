const mongoose = require('mongoose');

const captionSchema = mongoose.Schema({
    captionID: {
        type: Number,
        unique: true,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('captions', captionSchema);