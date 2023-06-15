import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import JuegoCard from './JuegoCard'
import { useTimer } from 'react-timer-hook';

function App() {
  const [banderas, setBanderas] = useState([]);
  const [paisCorrecto, setPaisCorrecto] = useState(0);
  const [puntos, setPuntos] = useState(0);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 15);

  const { seconds, restart, } = useTimer({time, onExpire: () => setPuntos(puntos - 1)}); //Timer expires when 15 seconds pass

  const fetchData = async () => {
    const resp = await axios.get("https://countriesnow.space/api/v0.1/countries/flag/images");
    setBanderas(resp.data.data)
    setPaisCorrecto(Math.floor(Math.random() * resp.data.data.length));
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    banderas.splice(paisCorrecto, 1);
    setPaisCorrecto(Math.floor(Math.random() * banderas.length))
    restart(time);
  }, [puntos])

  return (
    <div className='FlexCentered'>
      <h1>{seconds} Segundos restantes</h1>
      <JuegoCard paises={banderas} paisCorrecto={paisCorrecto} puntos={puntos} setPuntos={setPuntos} seconds={seconds}></JuegoCard>
    </div>
  );
}

export default App;
// 