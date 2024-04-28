require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const itemRoutes = require('./routes/listRoutes.js');

const FRONTEND_URL = process.env.FRONTEND_URL;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

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