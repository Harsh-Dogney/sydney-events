const express = require("express");
const Event = require("../models/Event");

const router = express.Router();

// ✅ GET: Fetch all events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error("🔥 Error fetching events:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// ✅ POST: Add a new event
router.post("/events", async (req, res) => {
  try {
    console.log("📩 Received Data:", req.body); // ✅ Log request data

    const { title, date, location, description, price, availableSeats } = req.body;

    if (!title || !date || !location || !description || price == null || availableSeats == null) {
      console.error("⚠️ Missing required fields");
      return res.status(400).json({ error: "All fields are required" });
    }

    const newEvent = new Event({
      title,
      date,
      location,
      description,
      price,
      availableSeats
    });

    await newEvent.save();
    console.log("✅ Event Saved:", newEvent); // ✅ Log saved event
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("🔥 Error adding event:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
