let ISSLoc = fetch("https://www.dnd5eapi.co/api/monsters");
ISSLoc
    .then(response => response.json())
    .then(data => 
    {
        let textDiv = document.querySelector("#textDiv");
        let myNum = 0;
        for (let i = 0; i < 100; i++){
            myNum = Math.round(Math.random()*300);
            // console.log(myNum);
            if (data.results[myNum].hit_points >= 40){
                exit;
            } 
            // console.log(i);
            
        }
        
        textDiv.innerText = `The ${data.results[myNum].name}`;
        // console.log(data.results);
    }

    );
   

async function getAndDisplaySpace(){
    let spaceResponse = await fetch("https://api.nasa.gov/planetary/apod?api_key=QoTXK5ln5ElHpNtm0WhP0hIflqMX9Ub5YwnDj7hh&count=1&thumbs=True");
    let spaceData = await spaceResponse.json();
    let spaceImageHTML = document.createElement("img");

    let mainBody = document.getElementsByClassName("mainBody");
    let myWidth = mainBody.item(0).clientWidth -60;
    // console.log(mainBody);
    // console.log(myWidth);

    spaceImageHTML.width = myWidth;
    // console.log(spaceData[0]);
    spaceImageHTML.src = spaceData[0].url;
    document.querySelector("#imgDiv").appendChild(spaceImageHTML);

    let spaceText = spaceData[0].explanation;
    let spaceDate = spaceData[0].date;
    let currentText = document.querySelector("#imgTextDiv");
    let oldHTML = document.querySelector("#imgTextDiv").innerHTML;
    let newHTML = `<p>${spaceText} (${spaceDate})</p><p>${oldHTML}</p>`;

    currentText.innerHTML = newHTML;
    
}

getAndDisplaySpace();

function clickedOnGalexy(){
    // console.log("toggle");
    let toggleDiv = document.getElementById("Galexy");


    if (toggleDiv.classList.contains("hidden")){
        toggleDiv.classList.remove("hidden");
    }
    else{
        toggleDiv.classList.add("hidden");
    }

}
function clickedOnMeteor(){
    // console.log("toggle");
    let toggleDiv = document.getElementById("Meteor");


    if (toggleDiv.classList.contains("hidden")){
        toggleDiv.classList.remove("hidden");
    }
    else{
        toggleDiv.classList.add("hidden");
    }

}
function clickedOnShips(){
    // console.log("toggle");
    let toggleDiv = document.getElementById("Ships");


    if (toggleDiv.classList.contains("hidden")){
        toggleDiv.classList.remove("hidden");
    }
    else{
        toggleDiv.classList.add("hidden");
    }

}
