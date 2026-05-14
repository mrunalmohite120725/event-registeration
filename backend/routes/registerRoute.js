const express = require('express');
const router = express.Router();
const registrations = [];

// POST /register
router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, eventName } = req.body;

    // Basic validation
    if (!fullName || !email || !phone || !eventName) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newRegistration = {
      id: Date.now().toString(),
      fullName,
      email,
      phone,
      eventName,
      createdAt: new Date()
    };
    registrations.push(newRegistration);

    res.status(201).json({ message: 'Registration successful!', data: newRegistration });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
});

module.exports = router;
