import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import QR from './QR';


axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      {/* Correct route configuration */}
      <Route path='/' element={<QR />} />
    </Routes>
  );
}

export default App;
