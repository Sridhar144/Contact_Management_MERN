import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  CircularProgress,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ContactForm = () => {
  const { id } = useParams(); // Get the contact ID from the route (if editing)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });
  const [loading, setLoading] = useState(false);

  // Load contact details if editing
  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/contacts/${id}`)
        .then((response) => {
          setFormData(response.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    console.log("Payload being sent:", formData); // Debugging: Log the payload
  
    const apiCall = id
      ? axios.put(`http://localhost:5000/contacts/${id}`, formData)
      : axios.post('http://localhost:5000/contacts', formData);
  
    apiCall
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding/updating contact:", error.response?.data || error.message); // Improved error logging
      });
  };
  

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Paper elevation={4} sx={{ padding: 4, width: '100%', maxWidth: 600 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={2}
        >
          <Typography variant="h5">
            {id ? 'Edit Contact' : 'Add New Contact'}
          </Typography>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
          >
            Back
          </Button>
        </Box>
        {loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight={300}
          >
            <CircularProgress />
          </Box>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              name="phoneNumber"
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              name="company"
              label="Company"
              value={formData.company}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="jobTitle"
              label="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Box display="flex" justifyContent="flex-end" marginTop={3}>
              <Button
                type="submit"
                variant="contained"
                startIcon={<SaveIcon />}
                color="primary"
              >
                {id ? 'Update Contact' : 'Save Contact'}
              </Button>
            </Box>
          </form>
        )}
      </Paper>
    </Box>
  );
};

export default ContactForm;
