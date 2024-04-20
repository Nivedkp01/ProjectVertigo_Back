const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importing cors middleware
const Score = require('./Model/ScoreModel'); // Importing Score model

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// MongoDB connection
mongoose.connect('mongodb+srv://nivedkp001:nivedmon@cluster0.tueph6i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Enable CORS for requests from http://localhost:3000
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// Route to handle POST requests to /dino endpoint
app.post('/score', async (req, res) => {
    const { duration, walletId } = req.body; // Extracting duration and walletID from request body

    try {
        // Creating a new document in the Score collection
        const scoreDoc = await Score.create({
            walletId: walletId,
            score: duration 
        });

        console.log('Score document created:', scoreDoc);
        
        // Sending back the created score document as the response
        res.json(scoreDoc);
    } catch (error) {
        console.error('Error creating score:', error);
        // Sending internal server error response in case of an error
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to handle POST requests to /score endpoint

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started running on port ${PORT}`);
});
