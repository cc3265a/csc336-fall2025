import { useState } from 'react'
import TodoItem from "./TodoItem"

function App() {
  const [task, setTask] = useState("");
  const [type, setType] = useState("");
  const [comp, setComp] = useState("");

  const [todos, setTodos] = useState([
    {
      task: "Encyclopedia of Fairies",
      type: "single",
      complete: false,
      id: 1
    },
    {
      task: "The Martian",
      type: "single",
      complete: false,
      id: 2
    },
    {
      task: "The Lost Tomb",
      type: "series",
      complete: false,
      id: 3
    }
  ]);


  function addTodo() {
    let newBook = {
      task: task,
      type: type,
      id: Date.now()
    }
    setTodos([...todos, newBook]);
    setTask("");
    setType("");
  }
  return (
    <div id='bodyDiv'>
      <h1>Book Tracker</h1>
      <label for="bookNameInp">Book Name </label>
      <br></br>
      <input 
        type="text"
        value={task}
        id="bookNameInp"
        onChange={(e) => setTask(e.target.value)} 
      />
      <br></br>
      <label for="bookTypeImp">Book Type (single or series) </label>
      <br></br>
      <input 
        type="text"
        value={type}
        id="bookTypeImp"
        onChange={(e) => setType(e.target.value)} 
      />
      <br></br>
      <button onClick={addTodo}>Add Book</button>
      
      <h3>My To-Read List: </h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem 
          todo={todo}
          key={todo.id}/>
        ))}
        
      </ul>
      
      <label for="completed">Enter Completed Book Name</label>
      <br></br>
      <input 
        type="text"
        value={comp}
        id="completed"
        onChange={
          (e) => {
            setComp(e.target.value);
          }
        }   
      />
      <br></br>
      <button onClick={(e) => completeBook(e, comp)}>Cross Off Book</button>
    </div>
  )
  function completeBook(){
    let holdThis = comp;
    for (let i = 0; i < todos.length; i++){
      if (todos[i].task === holdThis){
        let newCompVal = !(todos[i].complete);
        todos[i].complete = newCompVal;
        setComp(newCompVal);
      }
    }
    setComp("");
  }

}

export default App