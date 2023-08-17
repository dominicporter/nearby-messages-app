import React from 'react';
import NearbyMessagesForm from './NearbyMessagesForm';
import { Message } from './types';

interface ReceiveTabProps {
  messages: Message[]; // Update this type based on your data structure
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>; // Update this type based on your data structure
}

const ReceiveTab: React.FC<ReceiveTabProps> = ({ messages, setMessages }) => {
  return (
    <div>
      <NearbyMessagesForm messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default ReceiveTab;
