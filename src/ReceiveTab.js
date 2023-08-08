import React from 'react';
import NearbyMessagesForm from './NearbyMessagesForm';

const ReceiveTab = ({messages, setMessages}) => {

  return (
    <div>
      <NearbyMessagesForm messages={messages} setMessages={setMessages}/>
    </div>
  );
};

export default ReceiveTab;
