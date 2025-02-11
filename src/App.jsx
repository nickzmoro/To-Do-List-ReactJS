import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Title } from './styles.js'

import { FaTrash, FaCheck, FaRegFileAlt } from "react-icons/fa";

export function App() {
  const [list, setList] = useState(() => {
    // Carrega tarefas do Local Storage apenas uma vez ao iniciar
    const savedTasks = localStorage.getItem("list");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [inputTask, setInputTask] = useState("");

  // Atualiza o valor do input
  function inputValue(event) {
    setInputTask(event.target.value);
  }

  // Salva manualmente as tarefas no Local Storage
  function saveTheTask(tarefas) {
    localStorage.setItem("list", JSON.stringify(tarefas));
  }

  // Adiciona uma nova tarefa e salva no Local Storage
  function addTask() {
    if (inputTask.trim()) {
      const newList = [...list, { id: uuid(), task: inputTask, finished: false }];
      setList(newList);
      saveTheTask(newList);
      setInputTask("");
    }
  }

  // Alterna o status de concluído de uma tarefa e salva no Local Storage
  function completeTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
    saveTheTask(newList);
  }

  // Remove uma tarefa e salva a lista atualizada
  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    saveTheTask(newList);
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