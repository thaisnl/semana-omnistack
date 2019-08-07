const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    avatar: {
        type: String,
        required: true
    },
    likes: [{
        //como se fosse uma chave estrangeira
        type: mongoose.Schema.Types.ObjectId,
        red: 'Dev'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        red: 'Dev'
    }]
}, { timestamps: true })

module.exports = mongoose.model('Dev', DevSchema);