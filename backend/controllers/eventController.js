const Event = require('../models/Event');

// Add a new event manually
exports.addEvent = async (req, res) => {
  try {
    const { title, date, location, description, image, ticketLink } = req.body;

    // Validate required fields
    if (!title || !date || !location || !description || !ticketLink) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new event
    const newEvent = new Event({
      title,
      date,
      location,
      description,
      image: image || '', // Optional field
      ticketLink,
    });

    // Save the event to the database
    await newEvent.save();

    // Respond with the created event
    res.status(201).json({ message: 'Event added successfully', event: newEvent });
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ message: 'Failed to add event', error: error.message });
  }
};