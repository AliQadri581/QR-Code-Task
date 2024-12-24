
import express from 'express'

import cors from 'cors'
import QRCode from 'qrcode';

const port= 5000
const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
  }));
  

app.get('/', (req,res) =>{
    res.send('hello world ')
})


app.post('/qr', async (req, res) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ error: 'Text field is required.' });
    }
  
    try {
      const qrCodeBase64 = await QRCode.toDataURL(text); 
      res.json({ qrCode: qrCodeBase64 });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate QR code.' });
    }
  });



app.listen(port, () => console.log(`server running on port: ${port}`));