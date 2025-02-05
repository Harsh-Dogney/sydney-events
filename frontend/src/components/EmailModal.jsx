import React, { useState } from 'react';
import { collectEmail } from '../api';

const EmailModal = ({ event, onClose }) => {
  const [email, setEmail] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await collectEmail({
        email,
        optIn,
        event: event.title
      });
      window.location.href = event.ticketLink;
    } catch (err) {
      setError('Failed to submit email. Please try again.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Get Tickets for {event.title}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="opt-in">
            <input
              type="checkbox"
              checked={optIn}
              onChange={(e) => setOptIn(e.target.checked)}
            />
            Receive updates about future events
          </label>
          {error && <p className="error-message">{error}</p>}
          <div className="button-group">
            <button type="submit">Continue to Tickets</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;