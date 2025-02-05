const Email = require('../models/Email');

exports.collectEmail = async (req, res) => {
  try {
    const newEmail = new Email({
      email: req.body.email,
      optIn: req.body.optIn,
      event: req.body.event
    });

    await newEmail.save();
    res.status(201).json({ message: 'Email recorded successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};