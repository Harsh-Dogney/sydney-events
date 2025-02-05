import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../api';
import EventItem from './EventItem';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const { data } = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };
    getEvents();
  }, []);

  if (loading) return <div>Loading events...</div>;

  return (
    <div className="event-list">
      {events.map(event => (
        <EventItem key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventList;