const express = require('express');
const router = express.Router();

const{Contact, countMessages, getContacts,deleteMessage}=require("../Controller/contact")


// POST route to create a message
router.post('/contact', Contact);

// GET - Fetch all contact messages
router.get('/contact', getContacts);



// GET route to count total messages
router.get('/contact/count', countMessages);

// DELETE route for delte users
router.delete("/contact/:id", deleteMessage);

module.exports = router;

