import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import JuegoCard from './JuegoCard'

function App() {
  const [banderas, setBanderas] = useState([]);
  const [paisCorrecto, setPaisCorrecto] = useState(0);
  const [puntosCounter, setPuntosCounter] = useState(0);

  const fetchData = async () => {
    const resp = await axios.get("https://countriesnow.space/api/v0.1/countries/flag/images");
    setBanderas(resp.data.data)
    setPaisCorrecto(Math.floor(Math.random() * resp.data.data.length));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("PETEPETEPTEPTEPTE", puntosCounter);
    banderas.splice(paisCorrecto, 1);
    setPaisCorrecto(Math.floor(Math.random() * banderas.length))
  }, [puntosCounter])

  return (
    <JuegoCard paises={banderas} paisCorrecto={paisCorrecto} puntos={puntosCounter} setPuntos={setPuntosCounter}></JuegoCard>
  );
}

export default App;
// 