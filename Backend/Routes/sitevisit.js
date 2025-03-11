const express = require('express');
const router = express.Router();
const { getSiteVisit } = require('../Controller/sitevisit'); 

// Route for creating a new plot
router.get('/getSiteVisit', getSiteVisit);



module.exports = router;