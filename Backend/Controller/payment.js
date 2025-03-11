// const Stripe = require('stripe');
// const Payment = require('../Model/Payment');
// const stripe = new Stripe('sk_test_51QI1OxKpk9b5SMK2VKelu352ovsMKTcCnZCfdNgAPmb0Wxn8fdKfHumM29L9V2FGwRoeoqZFR062xPrGn2YRPfzy00Mxhzdi4T'); 



// // Create a payment
// const createPayment = async (req, res) => {
//   try {
//     const { amount, currency, user_id } = req.body;
//     console.log(amount, currency)
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//       automatic_payment_methods: { enabled: true },
//     });
//     console.log(paymentIntent)

//     // Save payment details to the database
//     const payment = new Payment({
//       amount,
//       currency,
//       status: 'pending',
//       paymentIntentId: paymentIntent.id,
//     });

//     const savedPayment = await payment.save();
//     console.log(savedPayment)

//     res.status(200).json({
//       message: 'Payment created successfully',
//       clientSecret: paymentIntent.client_secret,
//       payment: savedPayment,
//     });
//   } catch (error) {
//     console.error('Error creating payment:', error);
//     res.status(500).json({ message: 'Failed to create payment', error });
//   }
// };



// module.exports = { createPayment };

const twilio = require('twilio');
const PaymentDetails = require('../Model/Payment'); // Updated path to match standard naming conventions
require('dotenv').config();



const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);
const CreatePayment = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      mobile,
      aadhar,
      email,
      address,
      propertyId,
      advanceamount,
    } = req.body;

    // Validate required fields
    if (
      !firstname ||
      !lastname ||
      !mobile ||
      !aadhar ||
      !email ||
      !address ||
      !propertyId ||
      !advanceamount
    ) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Create a new payment entry
    const payment = new PaymentDetails({
      firstname,
      lastname,
      mobile,
      aadhar,
      email,
      address,
      propertyId,
      advanceamount,
    });

    // Save the payment in the database
    await payment.save();

    // Prepare the message content with all input fields
    const messageContent = `
Iam ${firstname} ${lastname},

Here is the Property summary of My submission:

- Name: ${firstname} ${lastname}
- Mobile: ${mobile}
- Aadhar: ${aadhar}
- Email: ${email}
- Address: ${address}
- Property ID: ${propertyId}
- Advance Amount: ₹${advanceamount}

We appreciate your business!

- Real Estate Team
    `;

    // Send a WhatsApp message
    client.messages
      .create({
        from: 'whatsapp:+14155238886', // Twilio sandbox number
        to: 'whatsapp:+916369455451', // User's WhatsApp number in international format
        body: messageContent,
      })
      .then((message) => {
        console.log('WhatsApp message sent:', message.sid);
        res.status(201).json({
          success: true,
          message: 'Payment saved and WhatsApp notification sent successfully.',
          payment,
          twilioSid: message.sid,
        });
      })
      .catch((error) => {
        console.error('Error sending WhatsApp message:', error);
        res.status(500).json({
          success: false,
          message: 'Payment saved but failed to send WhatsApp notification.',
          payment,
        });
      });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
}


const GetPaymentDetail = async (req,res) =>{
  try{
    const detailId=req.params.id
    const detail =await PaymentDetails.findById(detailId)
    res.status(200).json({
      success:true,
      Message:"Fetch Data Successfully",
      data:detail
    })
  } catch (err) {
    console.error("Error fetching detail:", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch  details",
      error: err.message,
    });
  }
}


// Method to fetch all payments
const GetAllPayments = async (req, res) => {
  try {
    // Fetch all payment documents from the database
    const payments = await PaymentDetails.find();

    res.status(200).json({
      success: true,
      message: "All payment details fetched successfully",
      data: payments,
    });
  } catch (err) {
    console.error("Error fetching payments:", err.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch payment details",
      error: err.message,
    });
  }
};

// Export both methods
module.exports = { CreatePayment, GetAllPayments ,GetPaymentDetail};