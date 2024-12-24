import React, { useState } from 'react';
import axios from 'axios';

const QR = () => {
  const [text, setText] = useState(''); 
  const [qrCode, setQrCode] = useState(''); 

  const generateQRCode = async () => {
    if (!text) {
      alert('Please enter some text.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/qr', {
        text,
      });
      setQrCode(response.data.qrCode); 
    } catch (error) {
      console.error('Error:', error);
      alert('Failed.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '20px',
          fontSize: '16px',
        }}
      />
      <br />
      <button
        onClick={generateQRCode}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Generate QR
      </button>
      <div style={{ marginTop: '20px' }}>
        {qrCode && <img src={qrCode} alt="QR Code" />}
      </div>
    </div>
  );
};

export default QR;
