

# **Sydney Events Website**
 <!-- Replace with an actual screenshot -->

A web application that lists all events in Sydney, Australia. The events are automatically scraped from event websites and displayed on the website. Users can view event details and get tickets by providing their email address.

---

## **Features**

- **Event Scraping**: Automatically scrapes event data from event websites every 24 hours.
- **Event Listing**: Displays events in a clean and user-friendly interface.
- **Email Collection**: Collects user emails before redirecting them to the ticket purchase page.
- **Manual Event Addition**: Admins can manually add events to the database via an API.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.

---

## **Technologies Used**

- **Frontend**: React, Vite, CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Web Scraping**: Puppeteer
- **Cron Jobs**: Node-cron (for scheduling scraping tasks)
- **API Testing**: Postman

---

## **Installation**

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### **Steps**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/sydney-events.git
   cd sydney-events
   ```

2. **Set Up Backend**
   ```bash
   cd backend
   npm install
   ```

   - Create a `.env` file in the `backend` folder:
     ```
     MONGO_URI=mongodb://localhost:27017/sydney_events
     PORT=5000
     ```

3. **Set Up Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

   - Create a `.env` file in the `frontend` folder:
     ```
     VITE_API_URL=http://localhost:5000
     ```

4. **Run the Application**
   - Start the backend server:
     ```bash
     cd ../backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd ../frontend
     npm run dev
     ```

5. **Access the Application**
   - Open your browser and navigate to:
     ```
     http://localhost:5173
     ```

---

## **API Endpoints**

### **Events**
- **GET `/api/events`**: Fetch all events.
- **POST `/api/events`**: Add a new event manually.

### **Emails**
- **POST `/api/emails`**: Collect user emails for event updates.

---

## **Folder Structure**

```
sydney-events/
├── backend/
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── scraper/           # Web scraping scripts
│   ├── utils/             # Utility functions (e.g., cron jobs)
│   ├── .env               # Environment variables
│   ├── server.js          # Backend entry point
│   └── package.json       # Backend dependencies
├── frontend/
│   ├── public/            # Static assets
│   ├── src/               # React components and logic
│   ├── .env               # Frontend environment variables
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
├── .gitignore             # Files to ignore in Git
└── README.md              # Project documentation
```

---

## **Usage**

### **Scraping Events**
- The scraping script runs automatically every 24 hours using a cron job.
- You can manually trigger the scraper by calling the appropriate function in `backend/scraper/eventScraper.js`.


## **Acknowledgements**

- [Puppeteer](https://pptr.dev/) for web scraping.
- [Vite](https://vitejs.dev/) for fast frontend development.
- [MongoDB](https://www.mongodb.com/) for database management.

---

## **Contact**

For questions or feedback, feel free to reach out:

- **Name**: Harsh Dogney
- **Email**: harshdogney@example.com
- **GitHub**: [harshdogney](https://github.com/harshdogney)

---
