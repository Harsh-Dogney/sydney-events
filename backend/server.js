require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const emailRoutes = require('./routes/emailRoutes');
const cronJob = require('./utils/cronJob');
const eventRoutes = require("./routes/eventRoutes"); 


const app = express();

// Database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", eventRoutes);
app.use('/api/emails', emailRoutes);



// Cron job
cronJob.start();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

