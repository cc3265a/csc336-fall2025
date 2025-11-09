import { useState } from 'react'
import TodoItem from "./TodoItem"

function App() {
  // const [x, setX] = useState(10);

  // ARRAY DESTRUCTURING with useState:
  // useState("") returns an array: ["", function]
  // The square brackets [task, setTask] use "array destructuring" to assign:
  //   - task = the first element (the current state value)
  //   - setTask = the second element (a function to update the state)
  // Instead of writing: const stateArray = useState(""); const task = stateArray[0]; const setTask = stateArray[1];
  // We use destructuring to get both values at once: const [task, setTask] = useState("");
  const [task, setTask] = useState("");
  const [type, setType] = useState("");
  
  // Another useState hook - this time for an array of todo objects
  const [todos, setTodos] = useState([
    {
      task: "Encyclopedia of Fairies",
      type: "single",
      id: 1
    },
    {
      task: "The Martian",
      type: "single",
      id: 2
    },
    {
      task: "The Lost Tomb",
      type: "series",
      id: 3
    }
  ]);


  function addTodo() {
    // Create a new todo object with the current task value
    let newBook = {
      task: task,
      type: type,
      id: Date.now()    // Generate a unique ID using current timestamp
    }
    // SPREAD OPERATOR (...todos):
    // Creates a new array containing all existing todos, then adds newTodo
    // We must create a new array (not modify the old one) because React needs to detect changes
    // [1, 2, 3] becomes [1, 2, 3, newTodo] - keeps all old items, adds the new one
    setTodos([...todos, newBook]);
    // Clear the input field by resetting task to empty string
    setTask("");
    setType("");
    // console.log(todos);
  }

  // JSX (JavaScript XML) - looks like HTML but it's actually JavaScript
  // The return statement returns JSX that React will render to the page
  return (
    <div>
      <label for="bookNameInp">Book Name </label>
      <input 
        type="text"
        value={task}
        id="bookNameInp"
        onChange={(e) => setTask(e.target.value)} 
      />
      <br></br>
      <label for="bookTypeImp">Book Type (single or series) </label>
      <input 
        type="text"
        value={type}
        id="bookTypeImp"
        onChange={(e) => setType(e.target.value)} 
      />
      <br></br>
      <button onClick={addTodo}>Add Book to the To-Read List</button>
      

      <ul>
        {/* .map() loops through the todos array and creates a component for each one */}
        {/* { } curly braces mean "this is JavaScript code" inside JSX */}
        {/* todos.map((todo) => ...) means: for each todo in todos, do something */}
        {/* The arrow function receives each todo object and returns a TodoItem component */}
        {/* key={todo.id} is required by React - helps React track which items changed */}
        {todos.map((todo) => (
          <TodoItem 
          todo={todo}
          key={todo.id}/>
        ))}
      </ul>

    </div>
  )
}

export default App