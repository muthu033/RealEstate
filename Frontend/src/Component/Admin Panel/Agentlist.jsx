import React, { useEffect, useState } from 'react';
import { Table, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './User.css';

const UserManagement = () => {
  const [agents, setAgents] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {

    const fetchAgents = async () => {
      try {
        const response = await axios.get('http://localhost:5003/api/agents');

        
        setAgents(response.data.data || []); // Ensure a default empty array
        
    
       
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchAgents();

  }, []);

  const filteredAgents = agents?.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.phone.toString().includes(searchTerm)
  );

  return (
    <div className="container-1 mt-4">
      <h4>Agent Management</h4>
      <div className="d-flex justify-content-end mb-3">
        <InputGroup style={{ maxWidth: '300px' }}>
          <FormControl
            placeholder="Search Agents..."
            aria-label="Search users"
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
            <th className="bg-secondary">PHONE</th>
          </tr>
        </thead>
        <tbody>
          {filteredAgents && filteredAgents.length > 0 ? (
            filteredAgents.map((agent) => (
              <tr key={agent.id}>
                <td>{agent.name}</td>
                <td>{agent.email}</td>
                <td>{agent.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No agents found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserManagement;
