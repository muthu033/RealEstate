require('dotenv').config();
const twilio = require('twilio');
const PaymentDetails = require('../Model/Payment');

// Twilio credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

const sendMessage = async (req, res) => {
    const { to } = req.body;

    const PaymentDetail = req.body;

    // Create a new Payment document
    const payment = new PaymentDetails(PaymentDetail);

    // Save the document in the database
    await payment.save();

    // Make sure required parameters are provided
    if (!to || !message) {
        return res.status(400).json({ error: 'To and message are required fields.' });
    }

    client.messages
        .create({
            from: 'whatsapp:+14155238886',  // Ensure this matches your Twilio sandbox number
            to: `whatsapp:${to}`,           // Recipient’s WhatsApp number in international format
                        // Custom message content
        })
        .then(message => res.json({ message: "Message sent successfully", sid: message.sid ,data:payment}))
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports = { sendMessage };
