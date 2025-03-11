const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const user = require('./Routes/User');
const plot = require('./Routes/plot');
const agent = require('./Routes/agent');
const apartment = require('./Routes/aparment');
const property = require('./Routes/Property');
const sitevisit = require('./Routes/sitevisit');
const payment = require('./Routes/payment');
const piechart = require('./Routes/piechart')
const message =require('./Routes/whatsapp')
const contact=require("./Routes/contact")

app.use('/api', user);
app.use('/api', plot);
app.use('/api', agent);
app.use('/api', apartment);
app.use('/api', property);
app.use('/api', sitevisit);
app.use('/api', payment);
app.use('/api',piechart)
app.use('/api',message)
app.use('/api',contact)

// Health Check Route
app.get('/', (req, res) => {
    res.send('Server Connected');
});

// 404 Error Handling
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// MongoDB Connection
mongoose.connect(process.env.DB)
    .then(() => {
        console.log('Database connected');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

// Start Server
const port = process.env.PORT || 5005;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
