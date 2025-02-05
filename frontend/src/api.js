import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api'
});

export const fetchEvents = () => api.get('/events');

export const collectEmail = (emailData) => api.post('/emails', emailData);