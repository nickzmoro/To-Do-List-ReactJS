import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css'

function App() {
  const [list, setList] = useState([{id: uuid(), task: "Escreva sua lição"}]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value)
    console.log(inputTask)
  }

  function cliqueiNoBotao() {
    /* Spread Operator 
      -> Coloca os itens anteriores + o novo item
    */
    setList([ ...list, { id: uuid(), task: inputTask }])
  }

  return (
    <div>
      <input onChange={inputMudou} type="text" placeholder='O que tenho para fazer...' />
      <button onClick={cliqueiNoBotao}>Adicionar</button>

      {
        <ul>
          {
            list.map(item => (
              <li key={item.id}>{item.task}</li>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default App