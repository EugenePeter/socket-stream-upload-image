import React from 'react';
import './App.css';
import UploadImage from './pages/UploadImage';

import io from 'socket.io-client';
import ss from 'socket.io-stream'

function App() {

  const socket = io("http://10.111.2.88:8865")


  return (
    <div className="App">
      <header className="App-header">
       <UploadImage socket={socket} ss={ss} />
      </header>
    </div>
  );
}

export default App;
