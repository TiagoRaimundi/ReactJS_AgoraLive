import React, { useState } from 'react';
import './App.css';
import AgoraUIKit from 'agora-react-uikit';

function App() {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    appId: "058da73f6dec4619b8ffef8b4b104e61",
    channel: "LiveAgora",
 
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
}

export default App;
