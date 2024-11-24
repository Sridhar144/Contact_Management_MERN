const express = require('express');
const router = express.Router();
const db = require('../db');

// Add Contact
router.post('/', (req, res) => {
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
  
    const sql = `INSERT INTO contacts (firstName, lastName, email, phoneNumber, company, jobTitle) VALUES (?, ?, ?, ?, ?, ?)`;
  
    db.query(sql, [firstName, lastName, email, phoneNumber, company, jobTitle], (err) => {
      if (err) {
        console.error('Database Error:', err); // Log the error to the console
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: 'Contact added successfully!' });
    });
  });
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM contacts WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: 'Contact not found' });
      res.json(results[0]);
    });
  });
  
  // Other routes and middleware...
  
// Fetch Contacts
router.get('/', (req, res) => {
  const sql = `SELECT * FROM contacts ORDER BY id ASC`;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Edit Contact
router.put('/:id', (req, res) => {
  const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
  const sql = `UPDATE contacts SET firstName=?, lastName=?, email=?, phoneNumber=?, company=?, jobTitle=? WHERE id=?`;
  db.query(sql, [firstName, lastName, email, phoneNumber, company, jobTitle, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Contact updated successfully!' });
  });
});

// Delete Contact
router.delete('/:id', (req, res) => {
  const sql = `DELETE FROM contacts WHERE id=?`;
  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Contact deleted successfully!' });
  });
});

module.exports = router;
