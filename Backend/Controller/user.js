const User = require('../Model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const nodemailer = require('nodemailer'); // for sending email



 const sendOtpEmail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'OTP for Password Reset',
      text:`Your OTP is: ${otp}` 
    };

    await transporter.sendMail(mailOptions);
    console.log('OTP email sent');
    return true;
  } catch (error) {
    console.error('Error sending OTP email:', error);
    return false;
 }
};


const generateOtp = (length = 6) => {
  let otp = '';
  
  // Generate a random OTP
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // Random digit between 0 and 9
  }
  
  // Set OTP expiry to 10 minutes from now
  const otpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes in the future
  
  return { otp, otpExpiry }; // Return OTP and expiry time
};
 

const Register = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword, role });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};



// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.json({ message: "Invalid email or password" });
//         }

//         const passwordvalue = await bcrypt.compare(password, user.password);
//         if (!passwordvalue) {
//             return res.json({ message: "Invalid password" });
//         }

//         const token = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN, { expiresIn: '10h' });
//         res.json({ token, message: "Login Successfully" });
//     } catch (err) {
//         console.log(err);
//     }
// };


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.ACCESS_TOKEN || 'your_secret_key', // Use environment variable for secret key
      { expiresIn: '10h' } // Adjust expiry time as needed
    );

    // Send the response with token and role
    res.json({ token, role: user.role, message: 'Login successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};





const getAllUser = async(req,res)=>{
  try{
    
    const allUser= await User.find({role:"User"})
    res.json(allUser)
  }
  catch(error){
    res.status(500).json({ message: 'Error retrieving users', error });
  }
}


const getUserCount = async (req, res) => {
  try {
    const userCount = await User.countDocuments({ role: "User" });
    res.json({ count: userCount });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user count', error });
  }
};


const getUsers = async (req, res) => {
  const { name, email, role } = req.query;

  try {
      // Build the query object based on the provided query parameters
      const query = {};
      if (name) query.name = name;
      if (email) query.email = email;
      if (role) query.role = role;

      // Find users that match the query and select only specified fields
      const users = await User.find(query).select('name email role');
      res.status(200).json({ users });
  } catch (error) {
      res.status(500).json({ message: 'Error retrieving users', error });
  }
};



// Import the email service

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    // Generate OTP and expiry time
    const { otp, otpExpiry } = generateOtp();
    
    // Save current OTP and expiry, move old OTP to oldOtp and oldOtpExpiry
    user.oldOtp = user.otp; // Store the previous OTP in oldOtp
    user.oldOtpExpiry = user.otpExpiry; // Store the previous OTP expiry time in oldOtpExpiry
    user.otp = otp; // Store the new OTP
    user.otpExpiry = otpExpiry; // Store the new OTP expiry time
    
    await user.save();

    // Send OTP to user's email using the sendOtpEmail service
    await sendOtpEmail(email, otp); // Call the sendOtpEmail function
    
    return res.json({
      success: true,
      message: 'OTP sent to your email.',
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: 'Error generating OTP or sending email',
    });
  }
};

// Verify OTP

  const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: 'User not found' });
      }
  
      // Check if OTP matches
      if (String(user.otp).trim() !== String(otp).trim()) {
        return res.json({ success: false, message: 'Invalid OTP' });
      }
  
      // Check if OTP has expired
      if (Date.now() > user.otpExpiry) {
        return res.json({ success: false, message: 'OTP has expired' });
      }
  
      // OTP is valid, reset OTP and expiry
      user.otp = null;
      user.otpExpiry = null;
      await user.save();
  
      return res.json({
        success: true,
        message: 'OTP verified successfully, you can now reset your password'
      });
    } catch (error) {
      console.error(error);
      return res.json({ success: false, message: 'Error verifying OTP' });
    }
  };
  

// Reset Password
// import bcrypt from 'bcrypt';
// import userModel from '../models/userModel.js';
// import bcrypt from 'bcryptjs';



const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body; // Expect email and newPassword in the request body

  try {
    // Check if email and newPassword are provided
    if (!email || !newPassword) {
      return res.json({ success: false, message: 'Email and new password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);  // Salt rounds can be adjusted if needed

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.json({ success: true, message: 'Password reset successful' });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'An error occurred while resetting the password' });
  }
};




module.exports = { Register, login, forgotPassword, resetPassword ,verifyOtp,getUsers,getAllUser,getUserCount};



