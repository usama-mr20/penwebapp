const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const penSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false,
        trim: true
        
    },
    description: {
        type: String,
        required: true,
        unique: false,
        trim: true
    }
}, {
    timestamps: true,
});

const Pen = mongoose.model('Pens', penSchema);

module.exports = Pen;