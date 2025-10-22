// This is a function that makes an api call to the local route called '/world'.
// All the '/world' route does (defined in server.js) is load the file world.json,
// and then send that json over to the client (this file).
// 
// As a contrived demo, this function also displays the name of a notable person
// in by generating HTML to add to a div.
async function loadWorld() {
    const res = await fetch("/world");
    const data = await res.json();

    let RegionDisplay = document.getElementById("regionDiv");
    let regionHTML = `<ul>`;

    let townDisplay = document.getElementById("townDiv");
    let townHTML = `<ul>`;

    let peopleDisplay = document.getElementById("peopleDiv");
    let peopleHTML = `<ul>`;

    for (let r = 0; r < data.regions.length; r++){
        console.log(data); 
        regionHTML = regionHTML + `<li>${data.regions[r].name}</li>`;  
        // console.log(data.regions[r].towns); 
        // console.log(data.regions[r].towns[0]); 
        for (let t = 0; t < data.regions[r].towns.length; t++){
            townHTML = townHTML + `<li>${data.regions[r].towns[t].name}</li>`;  
            for (let p = 0; p < data.regions[r].towns[t].notable_people.length; p++){
                peopleHTML = peopleHTML + `<li>${data.regions[r].towns[t].notable_people[p].name}</li>`; 
                // console.log("HERE"); 
            }
        }
     
    }
    regionHTML = regionHTML + `</ul>`;
    RegionDisplay.innerHTML = regionHTML;

    townHTML = townHTML + `</ul>`;
    townDisplay.innerHTML = townHTML;

    peopleHTML = peopleHTML + `</ul>`;
    peopleDisplay.innerHTML = peopleHTML;


}

// This function will run when the script is loaded
loadWorld();

// Get a reference to the form (defined in html)
let nameForm = document.querySelector("#nameForm");

// When the user clicks the button, this event listener will read the text in the
// form, construct an object and send it over to the server's 'excite' route using
// a post http request. On the server side, it loops through the world data, and
// if it finds someone with the name that it was given, it adds "!!!" to the data,
// writes it to a file, and then returns the data to the client (here). At this point,
// we can call loadWorld() again to refresh the data diplayed on the front end.
nameForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // FormData is a utility class that helps us access the data inside of forms
    // without needing to manually call 'document.querySelector' or for every input
    // in the form. After these two lines, we will have a single javascript object
    // where the keys are the "name" field of each input, and the values are the 
    // value of each input (e.g. the text written into a text input).
    let formData = new FormData(nameForm);
    let formDataInObjectForm = Object.fromEntries(formData.entries());

    // Tell the server to add excitement to a 
    const res = await fetch("/addRegion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataInObjectForm)
    });
    console.log(formDataInObjectForm);
    loadWorld();
});