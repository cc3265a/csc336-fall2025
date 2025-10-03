let ISSLoc = fetch("http://api.open-notify.org/iss-now.json");
ISSLoc
    .then(response => response.json())
    .then(data => 
    {
        let textDiv = document.querySelector("#textDiv");
        let longVar = data.iss_position.longitude;
        let latVar = data.iss_position.latitude;
        let myText = `${longVar}, ${latVar}`;
        textDiv.innerText = myText;
        // console.log(data);
    }

    );

async function getAndDisplaySpace(){
    let spaceResponse = await fetch("https://api.nasa.gov/planetary/apod?api_key=QoTXK5ln5ElHpNtm0WhP0hIflqMX9Ub5YwnDj7hh&count=1&thumbs=True");
    let spaceData = await spaceResponse.json();
    let spaceImageHTML = document.createElement("img");

    let mainBody = document.getElementsByClassName("mainBody");
    let myWidth = mainBody.item(0).clientWidth -120;
    // console.log(mainBody);
    // console.log(myWidth);

    spaceImageHTML.width = myWidth;
    // console.log(spaceData[0]);
    spaceImageHTML.src = spaceData[0].url;
    document.querySelector("#imgDiv").appendChild(spaceImageHTML);

    let spaceText = spaceData[0].explanation;
    let spaceDate = spaceData[0].date;
    document.querySelector("#imgTextDiv").innerText = spaceText + " (" + spaceDate + ")";

    
    // console.log(spaceText);

    // console.log(spaceImageHTML.src);
    // console.log(spaceData);
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
