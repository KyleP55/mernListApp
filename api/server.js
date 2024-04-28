require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const itemRoutes = require('./routes/listRoutes.js');

const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());

// Routes
app.use('/items', itemRoutes);


// Connections
try {
    mongoose.connect(DATABASE_URL);
    console.log('Connected to mongodb');
} catch (err) {
    console.log(err);
}

app.listen(3001, () => {
    console.log('Server running on port 3001');
});