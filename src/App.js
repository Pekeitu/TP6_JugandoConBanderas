import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import JuegoCard from './JuegoCard'
import Pista from './Pista'
import { useTimer } from 'react-timer-hook';
import { Button } from 'react-bootstrap';

function App() {
  const [banderas, setBanderas] = useState([]);
  const [paisCorrecto, setPaisCorrecto] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [letrasDePista, setLetrasDePista] = useState([]);

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
    setPaisCorrecto(Math.floor(Math.random() * banderas.length));
    restart(time);

    setLetrasDePista([]);
  }, [puntos])

  const generatePista = () => {
    console.log("LETRASDEPISTA", letrasDePista);
    console.log("BANDERAS", banderas[paisCorrecto]);

    if(letrasDePista.length === banderas[paisCorrecto].name.length) return;

    let randomIdx;
    do
    {
      randomIdx = Math.floor(Math.random() * banderas[paisCorrecto].name.length);
    } while(letrasDePista.includes(randomIdx));

    setLetrasDePista([...letrasDePista, randomIdx]);
    
    const newTimer = new Date();
    newTimer.setSeconds(newTimer.getSeconds() + seconds - 2);
    restart(newTimer);

    console.log(letrasDePista);
  }

  return (
    <div className='FlexCentered' id='OpaqueBack'>
      <h1>{seconds} Segundos restantes</h1>
      <JuegoCard paises={banderas} paisCorrecto={paisCorrecto} puntos={puntos} setPuntos={setPuntos} seconds={seconds}></JuegoCard>
      <Pista paises={banderas} paisCorrecto={paisCorrecto} letrasDePista={letrasDePista}></Pista>
      <Button onClick={generatePista}>Quiero una pista!</Button>
    </div>
  );
}

export default App;
// 