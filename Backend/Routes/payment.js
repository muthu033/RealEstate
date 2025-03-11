const express = require('express');
const router = express.Router();
const { CreatePayment,GetAllPayments,GetPaymentDetail } = require('../Controller/payment');

// Define route for creating payment
router.post('/payment', CreatePayment);

// Define route for fetching all payments
router.get('/payments', GetAllPayments);

router.get('/getdetail/:id',GetPaymentDetail)

module.exports = router;
