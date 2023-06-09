import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import JuegoCard from './JuegoCard'

function App() {
  const [banderas, setBanderas] = useState([]);
  const [paisCorrecto, setPaisCorrecto] = useState(0);

  const fetchData = async () => {
    const resp = await axios.get("https://countriesnow.space/api/v0.1/countries/flag/images");
    setBanderas(resp.data.data)
    setPaisCorrecto(Math.random() * resp.data.data.length);
  }

  useEffect(() => {
    fetchData();    
  }, []);

  return (
    <JuegoCard paisCorrecto={paisCorrecto} arrayPaises={banderas}></JuegoCard>
  );
}

export default App;
// 