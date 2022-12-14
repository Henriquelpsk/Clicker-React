import React from 'react';
import './App.css';
import Bola from './components/Bola';
import Navegacao from './components/Navegacao';
import { useRecoilState } from 'recoil'
import { listaLocalizacao } from './state/atom';

function App() {

  const [localizacao, setLocalizacao] = useRecoilState(listaLocalizacao);

  const getCordenates = (event: React.MouseEvent<HTMLElement>) => {
      console.log(event.clientX, event.clientY)
      const objeto = { 'x':event.clientX, 'y':event.clientY}
      setLocalizacao([...localizacao, objeto])
  }

  return (
    <>
    <Navegacao />
    <div className="App" onClick={getCordenates}>
      {localizacao.map((objeto,key)=> (
        <Bola key={key} x={objeto.x} y={objeto.y}/>
      ))}
    </div>
    </>
  );
}

export default App;
