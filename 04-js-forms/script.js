let diceDiv = document.querySelector("#diceRoll");

function rollDice(){
    let roll = Math.random() * 20;
    roll = Math.ceil(roll);
    console.log(roll);
    // diceDiv.innerHTML = "<div class='diceRoll'>" + roll + "</div>";
    let newDiceDiv = document.createElement("div");
    newDiceDiv.innerText = roll;
    newDiceDiv.className = "diceRoll"
    diceDiv.append(newDiceDiv);
}

// animal.js content
let animals = [
    {
        type: "cat",
        strength: 12,
        charisma: 16
    },
    {
        type: "rabbit",
        strength: 10,
        charisma: 13
    },
    {
        type: "SeaHorse",
        strength: 8,
        charisma: 20
    }

];

document.addEventListener("DOMContentLoaded", populateAnimalDiv());
function populateAnimalDiv(){
    let infoDiv = document.querySelector("#info");

    infoDiv.innerHTML = "";

    // for (i = 0; i < animals.length; i++){
    for (let animal of animals){
        let animalHTML = createAnimalDiv(animal);
        infoDiv.innerHTML += animalHTML;
    }
}
function createAnimalDiv(animal){
    return `
        <div>
            <h1>${animal.type}</h1>
            <div class="stats">strength: ${animal.strength}</div>
            <div class="stats">charisma: ${animal.charisma}</div>
        </div>
        
    `;
}

// let addAnimalForm = document.querySelector("addAnimalForm");
let addAnimalForm = document.querySelector("#addAnimalForm");
addAnimalForm.addEventListener("submit", addNewAnimal);

function addNewAnimal(e){
    e.preventDefault();
    let typeInput = document.querySelector("#animalTypeField").value;
    let strengthInput = document.querySelector("#animalStrengthField").value;
    let charismaInput = document.querySelector("#animalCharismaField").value;
    let newAnimal = {
        type: typeInput,
        strength: strengthInput,
        charisma: charismaInput
    }
    animals.push(newAnimal);

    populateAnimalDiv();
}
