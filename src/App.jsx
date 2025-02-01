import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem } from './styles.js'

import { FaTrash, FaCheck } from "react-icons/fa";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Escreva sua lição" }]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value)
    console.log(inputTask)
  }

  function cliqueiNoBotao() {
    /* Spread Operator 
      -> Coloca os itens anteriores + o novo item
    */
    setList([...list, { id: uuid(), task: inputTask }])
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} type="text" placeholder='O que tenho para fazer...' />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        {
          <ul>
            {
              list.map(item => (
                <ListItem>
                  <li key={item.id}>{item.task}</li>
                  <div>
                    <FaCheck className='btn-check'/>
                    <FaTrash className='btn-delete'/>
                  </div>
                </ListItem>
              ))
            }
          </ul>
        }
      </ToDoList>
    </Container>
  )
}

export default App