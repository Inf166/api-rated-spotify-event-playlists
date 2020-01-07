const mongoose = require('mongoose');

const setSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    requests: [Number]
});

module.exports = mongoose.model('Set', setSchema);