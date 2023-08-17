import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from './config';
import LocationEntryBox from './LocationEntryBox';

const BroadcastMessagesForm: React.FC = () => {
  const [latitude, setLatitude] = useState<string>('51.5007');
  const [longitude, setLongitude] = useState<string>('-0.1246');
  const [message, setMessage] = useState<string>('');

  const handleBroadcast = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/broadcast`, {
        message,
        latitude,
        longitude,
      });
      setMessage('');
    } catch (error) {
      console.error('Error broadcasting message:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleBroadcast}>
        <LocationEntryBox
          latitude={latitude}
          longitude={longitude}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
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

export default BroadcastMessagesForm;
