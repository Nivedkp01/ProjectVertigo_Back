const mongoose = require('mongoose');

// Define the schema for the Score model
const ScoreSchema = new mongoose.Schema({
    walletId: { type: String, required: true },
    score: { type: Number, required: true }
});

// Create and export the Score model
module.exports = mongoose.model('Score', ScoreSchema);

