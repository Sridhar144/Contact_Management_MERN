import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate(); // To navigate to the edit form

  // Fetch contacts
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios
      .get('http://localhost:5000/contacts')
      .then((response) => setContacts(response.data))
      .catch((err) => console.error(err));
  };

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      axios
        .delete(`http://localhost:5000/contacts/${id}`)
        .then(() => {
          alert('Contact deleted successfully');
          fetchContacts(); // Refresh the list after deletion
        })
        .catch((err) => console.error('Error deleting contact:', err));
    }
  };

  // Handle edit
  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Redirect to the edit form with the contact ID
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phoneNumber}</TableCell>
              <TableCell>{contact.company}</TableCell>
              <TableCell>{contact.jobTitle}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEdit(contact.id)}
                  style={{ marginRight: '10px' }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
