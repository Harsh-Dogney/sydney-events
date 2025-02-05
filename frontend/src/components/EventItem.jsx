import React, { useState } from 'react';
import EmailModal from './EmailModal';

const EventItem = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="event-card">
      {event.image && (
        <img src={event.image} alt={event.title} className="event-image" />
      )}
      <h3>{event.title}</h3>
      <p className="event-date">
        {new Date(event.date).toLocaleDateString('en-AU', {
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric'
        })}
      </p>
      <p className="event-location">{event.location}</p>
      <p className="event-description">{event.description}</p>
      <button 
        className="ticket-button"
        onClick={() => setShowModal(true)}
      >
        GET TICKETS
      </button>

      {showModal && (
        <EmailModal 
          event={event}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default EventItem;