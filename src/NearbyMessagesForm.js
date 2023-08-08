import React, { useState } from 'react';
import axios from 'axios';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_LOCAL;

const NearbyMessagesForm = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${API_URL}/getMessagesNearby`, {
        params: { latitude, longitude },
      });
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching nearby messages:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Latitude:</label>
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div>
          <label>Longitude:</label>
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <button type="submit">Search Nearby Messages</button>
      </form>
      <div>
        <h2>Nearby Messages:</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NearbyMessagesForm;
