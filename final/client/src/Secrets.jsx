import { useState } from 'react'
import * as fs from 'fs';

// hey, I know this is the Least Secure way of doing passwords, but it uses react and there are zero consequences if someone breaks in so,,,

let fileContent = fs.readFileSync("../server/data.json", "utf8");
let myParse = JSON.parse(fileContent);

let jsonData = [];

for (let j = 0; j < myParse.length; j++){
    jsonData.push(myParse[j]);
}
console.log(jsonData);


function Secrets() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);


    function addTodo() {
        let newCharacter = task
        setTodos([...todos, newCharacter]);
    }

    function printTodo(){
        const ULID = document.querySelector("#printTodoID");
        let myLen = todos.length;
        ULID.innerHTML = "";
        
        for (let i = 0; i < myLen; i++){
            if (todos[i] === ""){
                todos.splice(i, 1);
                i--;
            }
            else{
                let myLi = document.createElement("li");
                myLi.innerText = todos[i];
                ULID.appendChild(myLi)
            }
        }
    }


    const [userPass, setUserPass] = useState("");

    function checkPassword(){
        if (userPass === "secretPass"){
            console.log("yippee!");
            let secretDiv = document.getElementById("secretsRevealed");
            console.log(secretDiv);
            secretDiv.innerText = "Welcome to the world of secrets!";
            secretDiv.innerHTML = secretDiv.innerHTML + `
            <iframe
                src="./secretsPage.html"
                title="iframe Example 1"
                width="400"
                height="300">
            </iframe>`
            console.log("secrets here");
        }
        else{
            console.log("uh oh :( thats not the password :( no secrets for you :(");
        }
    }


    return (
    <div id='bodyDiv'>
        <h1>My Website!</h1>
        <input
            type="text"
            id="passInp"
            onChange={(e) => setUserPass(e.target.value)} 
        />
        <br></br>
        <button onClick={checkPassword}>Enter</button>
        <div id="secretsRevealed"></div>
        
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
      <button onClick={addTodo}>Add Book</button>
      
      <h3>My To-Read List: </h3>
      <ul id='printTodoID'></ul>
      {printTodo()}

    </div>
  )
}
export default Secrets