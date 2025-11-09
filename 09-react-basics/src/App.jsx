import { useState } from 'react'
import TodoItem from "./TodoItem"

function App() {
  // let x = 10;
  // useState allows it to be updated in render whenever it changes
  const [x, setX] = useState(10);
  const [name, setName] = useState("Mike");
  
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([
    {
      task: "eat dinner",
      complete: false,
      id: 1
    },
    {
      task: "pet cat",
      complete: true,
      id: 2
    },
    {
      task: "play game",
      complete: false,
      id: 3
    }
  ]);


  function addTodo(){
    console.log(task);
    let newTodo = {
      task: task,
      completed: false,
      id: Date.now()
    }
    setTodos(...todos, newTodo)
    setTask("");
  }

  return (
    <div>
      <input 
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {task}

      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}/>
        ))}
      </ul>
    </div>
  )
}

export default App
