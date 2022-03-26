const mongoose = require('mongoose');

const pictureSchema = mongoose.Schema({
    pictureID: {
        type: Number,
        unique: true,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('pictures', pictureSchema);