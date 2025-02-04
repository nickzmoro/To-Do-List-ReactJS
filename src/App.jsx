import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Title } from './styles.js'

import { FaTrash, FaCheck, FaRegFileAlt } from "react-icons/fa";

export function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState("");

  function inputValue(event) {
    setInputTask(event.target.value)
  }

  function addTask() {
    /* Spread Operator 
      -> Mantém os itens anteriores + o novo item
    */
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function completeTask(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteTask(id) {
    const deleteList = list.filter(item => item.id !== id)

    setList(deleteList)
  }

  return (
    <Container>
      <Title>To-Do-List com <span>React</span></Title>
      <ToDoList>
        <Input onChange={inputValue} type="text" placeholder='O que tenho para fazer...' />
        <Button onClick={addTask}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>

                  <li>{item.task}</li>

                  <div>
                    <FaCheck className='btn-check' onClick={() => completeTask(item.id)} />
                    <FaTrash className='btn-delete' onClick={() => deleteTask(item.id)} />
                  </div>

                </ListItem>
              ))
            ) : (
              <h3>Adicione uma tarefa à lista. <FaRegFileAlt /></h3>
            )
          }
        </ul>

      </ToDoList>
    </Container>
  )
}