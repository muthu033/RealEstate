
const Message = require('../Model/contact'); // Import the model

const Contact = async (req, res) => {
  try {
    const { name, email, subject, saySomething, phone } = req.body;


    const message = await Message.create({
      name,
      email,
      subject,
      saySomething,
      phone

    });

    res.status(201).json({ message: 'Message sent successfully', data: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending message', error: error.message });
  }
};


const getContacts = async (req, res) => {
  try {
    const messages = await Message.find(); // Fetch all messages
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching messages', error: error.message });
  }
};


const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL
    const deletedMessage = await Message.findByIdAndDelete(id);

    if (!deletedMessage) {
      return res.status(404).json({ message: 'Message not found' });
    }

    res.status(200).json({ message: 'Message deleted successfully', data: deletedMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting message', error: error.message });
  }
};



const countMessages = async (req, res) => {
  try {
    const totalMessages = await Message.countDocuments();
    res.status(200).json({ totalMessages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error counting messages', error: error.message });
  }
};

module.exports = { Contact, getContacts, countMessages,deleteMessage };

