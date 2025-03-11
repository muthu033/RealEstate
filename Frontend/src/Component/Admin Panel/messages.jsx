import React, { useEffect, useState } from 'react';
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './User.css';

const EnquiryMessages = () => {
  const [messages, setMessages] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch messages from the backend
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5003/api/contact'); 
        setMessages(response.data || []); 
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  // Filter messages based on search term
  const filteredMessages = messages.filter(
    (message) =>
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  // Handle delete message
  const deleteMessage = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5003/api/contact/${id}`);
      if (response.status === 200) {
        setMessages(messages.filter((message) => message._id !== id)); // Remove the deleted message from the state
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div className="container-1 mt-4">
      <h4>Enquiry Messages</h4>
      <div className="d-flex justify-content-end mb-3">
        <InputGroup style={{ maxWidth: '300px' }}>
          <FormControl
            placeholder="Search Messages..."
            aria-label="Search messages"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </div>
      <Table bordered hover responsive className="userf">
        <thead>
          <tr>
            <th className="bg-secondary">NAME</th>
            <th className="bg-secondary">EMAIL</th>
            <th className="bg-secondary">SUBJECT</th>
            <th className="bg-secondary">SAY SOMETHING</th>
            <th className="bg-secondary">PHONE</th>
            <th className="bg-secondary">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {filteredMessages.length > 0 ? (
            filteredMessages.map((message) => (
              <tr key={message._id}>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.subject}</td>
                <td>{message.saySomething}</td>
                <td>{message.phone}</td>
                <td>
                  <Button variant="link"  className="text-danger" onClick={() => deleteMessage(message._id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No enquiry messages found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default EnquiryMessages;
