const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
// app.use(cors());
app.use(morgan('dev'));
// server.js
app.use(cors({
    origin: '*', // Allow all origins for now
  }));
  
// Database Connection
const db = require('./db');

// Routes
const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
