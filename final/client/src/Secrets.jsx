import { useState } from 'react'

// hey, I know this is the Least Secure way of doing passwords, but it uses react and there are zero consequences if someone breaks in so,,,

function Secrets() {
    const [userPass, setUserPass] = useState("");

    function checkPassword(){
        if (userPass === "secretPass"){
            console.log("yippee!");
            let secretDiv = document.getElementById("secretsRevealed");
            console.log(secretDiv);
            secretDiv.innerText = "Welcome to the world of secrets!";
            secretDiv.innerHTML = secretDiv.innerHTML + `
            <iframe
                src="./secrets.html"
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
        
    </div>
  )
}
export default Secrets