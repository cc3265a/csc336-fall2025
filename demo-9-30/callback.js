let button = document.querySelector("#callbackDemoButton");

// function clickedEvent(e){
//     console.log("eee");
// }

button.addEventListener("click", e => console.log("clicked!"));
let beforeRequest = Date.now();

// function doSomething(numTimes){
//     let sum = 0;
//     for (let i = 0; i < numTimes; i++){
//         sum += i * numTimes /4;
//     }
//     return sum;
// }

// let result = doSomething(100);
// console.log(result);
// let dogRequest = fetch("https://dog.ceo/api/breeds/image/random");
// console.log(dogRequest);
// dogRequest
//     .then((response) => {return response.json()})
//     .then((DogData) => {
//         let timePast = Date.now() - beforeRequest;
//         console.log(`it took ${timePast} for the request`)
//         console.log(DogData);
//         let dogImageHTML = document.createElement("img");
//         // dogImageHTML.width = 200;
//         dogImageHTML.src = DogData.message;
//         document.querySelector("#dogDiv").appendChild(dogImageHTML);
//         })
//     .catch( () => console.log("something went wrong"));

async function getAndDisplayDog(){
    let dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
    let dogData = await dogResponse.json();
    let timePast = Date.now() - beforeRequest;
    // console.log(`it took ${timePast} for the request`)
    // console.log(dogData);
    let dogImageHTML = document.createElement("img");
    dogImageHTML.width = 700;
    dogImageHTML.src = dogData.message;
    document.querySelector("#dogDiv").appendChild(dogImageHTML);
}
for (let i = 0; i < 0; i++){
    getAndDisplayDog();
}


let zeldaFact = fetch("http://api.open-notify.org/iss-now.json");
zeldaFact
    .then(response => response.json())
    .then(data => 
    {
        let textDiv = document.querySelector("#textDiv");
        let myText = [data.iss_position.longitude," ", data.iss_position.latitude];
        textDiv.innerText = myText;
        console.log(data);
    }

    );
    