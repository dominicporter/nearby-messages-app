import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from './constants';

const NearbyMessagesForm = () => {
  const [latitude, setLatitude] = useState('51.5007'); // Parliament Square latitude
  const [longitude, setLongitude] = useState('-0.1246'); // Parliament Square longitude
  const [range, setRange] = useState('10'); // 10 km range
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${API_URL}/getMessagesNearby`, {
        params: { latitude, longitude, range },
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
          <label>Range (km):</label>
          <input
            type='text'
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>
        <button type='submit'>Search Nearby Messages</button>
      </form>
      <div>
        <h2>Nearby Messages:</h2>
        <ul>
        {messages.map((message, index) => (
          <div key={index} style={styles.message}>
            <p>{new Date(message.timestamp).toLocaleString()}</p>
            <p>Latitude: {message.latitude} - Longitude: {message.longitude}</p>
            <p>{message.message}</p>
          </div>
        ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
    message: {
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '10px',
    },
  };

export default NearbyMessagesForm;
