import React from "react";
import styled from "ClockView-container";

export default function App() {
  // segundos e função que altera
  const [segundos, setSegundos]= React.useState(0);
  // minutos e funçaõ que altera
  const [minutos, setMinutos] = React.useState(0);
  // lista de parciais que é vazia no começo
  const [parciais, setParciais] = React.useState([]);
  // pausa 
  const [pause, setPause] = React.useState(true);
  React.useEffect(() => {
    if (pause == false) {
      let interval = setInterval(() => {
        if (segundos >= 59) {
          setSegundos(0)
          setMinutos(minutos+1)
        } else {
          setSegundos(segundos+1)
        }
        
      }, 1000)
      return () => clearInterval(interval);
    }
  }, [pause, segundos])
  // number é o valor
  // setNumber é a função que vc chama pra alterar o valor de number
  return (
    <div className="App">
      <button onClick={() => {
        setPause(!pause);
      }}>{pause == true ? "Start" :"Pause" }</button>
      <button onClick={() => {
        setPause(true)
        setSegundos(0)
        setMinutos(0)
        setParciais([])
      }}>Zerar</button>
      <button onClick={() => {
        setParciais([...parciais, {min: minutos, seg: segundos}])
      }}>Pegar Parcial</button>
      <h1>{minutos}:{segundos}</h1>
      {parciais.map((el, i) => {
        return (
          <div>
            {i > 0 && (
              <h3>{el.min - parciais[i -1].min}:{el.seg - parciais[i -1].seg}</h3>
            )}  
            <h1>{el.min}:{el.seg}</h1>
          </div>
        );
      })}
    </div>
  );
}

