import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Title } from './styles.js'

import { FaTrash, FaCheck } from "react-icons/fa";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Escreva sua lição", finished: true }]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    /* Spread Operator 
      -> Mantém os itens anteriores + o novo item
    */
    setList([...list, { id: uuid(), task: inputTask, finished: false }])
  }

  function completeTask(id) {

    const newList = list.map( item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)

  }

  function deleteTask(id) {

    const deleteList = list.filter( item => item.id !== id)

    setList(deleteList)

  }

  return (
    <Container>
      <Title>To-Do-List com <span>React</span></Title>
      <ToDoList>
        <Input onChange={inputMudou} type="text" placeholder='O que tenho para fazer...' />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        {
          <ul>
            {
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <li>{item.task}</li>
                  <div>
                    <FaCheck className='btn-check' onClick={() => completeTask(item.id)}/>
                    <FaTrash className='btn-delete' onClick={() => deleteTask(item.id)}/>
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