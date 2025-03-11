const express = require('express');
const router = express.Router();
const { Register, login, forgotPassword, resetPassword ,verifyOtp,getUsers,getAllUser,getUserCount } = require('../Controller/user');

// Registration route
router.post('/register', Register);

// Login route
router.post('/login', login);

// Forgot Password route
router.post('/forgot-password', forgotPassword);

// Reset Password route
router.post('/reset-password', resetPassword);

router.post('/verifyotp',verifyOtp)

router.get('/getusers',getUsers)

router.get('/alluser',getAllUser)

router.get('/usercount',getUserCount)



module.exports = router;
