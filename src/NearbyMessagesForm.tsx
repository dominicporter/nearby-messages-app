import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from './config';
import LocationEntryBox from './LocationEntryBox';
import { Message } from './types';


interface NearbyMessagesFormProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const NearbyMessagesForm: React.FC<NearbyMessagesFormProps> = ({
  messages,
  setMessages,
}) => {
  const [latitude, setLatitude] = useState<string>('51.5007');
  const [longitude, setLongitude] = useState<string>('-0.1246');
  const [range, setRange] = useState<string>('10');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${API_URL}/getMessagesNearby`, {
        params: { latitude, longitude, range },
      });
      setMessages(response.data as Message[]);
    } catch (error) {
      console.error('Error fetching nearby messages:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <LocationEntryBox
          latitude={latitude}
          longitude={longitude}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
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
              <p>
                Latitude: {message.latitude} - Longitude: {message.longitude}
              </p>
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
