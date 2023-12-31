import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReceiveTab from './ReceiveTab';
import BroadcastTab from './BroadcastTab';
import { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Nearby Messages App</h1>
      </header>
      <main>
        <Tabs>
          <TabList>
            <Tab>Receive</Tab>
            <Tab>Broadcast</Tab>
          </TabList>
          <TabPanel>
            <ReceiveTab messages={messages} setMessages={setMessages} />
          </TabPanel>
          <TabPanel>
            <BroadcastTab />
          </TabPanel>
        </Tabs>
      </main>
    </div>
  );
}

export default App;
