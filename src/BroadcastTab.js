import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from './constants';

const BroadcastTab = () => {
  const [latitude, setLatitude] = useState('51.5007'); // Parliament Square latitude
  const [longitude, setLongitude] = useState('-0.1246'); // Parliament Square longitude
  const [message, setMessage] = useState('');

  const handleBroadcast = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/broadcast`, { message, latitude, longitude });
      setMessage('');
    } catch (error) {
      console.error('Error broadcasting message:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleBroadcast}>
        <div>
          <label>Latitude:</label>
          <input
            type='text'
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div>
          <label>Longitude:</label>
          <input
            type='text'
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <div>
          <label>Message:</label>
          <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type='submit'>Broadcast Message</button>
      </form>
    </div>
  );
};

export default BroadcastTab;
