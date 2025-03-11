const express = require('express');
const router = express.Router();
const { GetPiechart } = require('../Controller/piechart'); // Adjust the path to match your project structure



// Define the route for fetching pie chart data
router.get('/piechart', GetPiechart);


module.exports = router;
