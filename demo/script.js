console.log("eeee");
let demoBoxes = document.getElementsByClassName("demo-box");
console.log(demoBoxes.length);

let clickCount = 0;

function clickedOnDemoBox(){
    console.log("CLICK");
    clickCount++;
    let transDiv = document.getElementById("trans");
    transDiv.innerText = clickCount;
}