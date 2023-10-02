import React, { useState } from 'react';
import './App.css';
import AgoraUIKit from 'agora-react-uikit';

function App() {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    appId: "058da73f6dec4619b8ffef8b4b104e61",
    channel: "LiveAgora",
    token: "007eJxTYJBdVbTh/mVZ3n36d2OFOPaduaN4MY3t6CeJP6LTLJ2lDTYoMBiYWqQkmhunmaWkJpuYGVomWaSlpaZZJJkkGRqYpJoZGupIpzYEMjJkq4WxMDJAIIjPyeCTWZbqmJ5flMjAAACMlR8V",
 
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
