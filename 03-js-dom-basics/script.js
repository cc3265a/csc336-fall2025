let clickCount = -2;
let dualCount = 0;
let runCountVar = 0;

var myStringArray = [
    "Xanthias! Hey, Xanthias!",
    "Over here!",
    "Come here!",
    "Greetings, master.",
    "All right, what have we got?",
    "Nothing but filthy muck—mud and darkness.",
    "Did you see the men who beat their fathers— or perjurers—the ones he mentioned?",
    "You mean you don’t?",
    "By Poseidon, yes I do! Now I see them. So what do we do next?",
    "We’d better get away from here. Hercules mentioned to us it’s the place where wild beast prowl.",
    "To Hell with him! He was talking big to make me scared. He saw I was a fighter, and he’s jealous. No one’s more full of it than Hercules. But I’m keen now for some adventure, some exploit worthy of this expedition.",
    "Of course you are. What’s that? I hear a noise.",
    "What? Where is it?",
    "Behind us.",
    "Get behind me.",
    "No, it’s up ahead.",
    "You get in front.",
    "My god! Now I see it. Ooooh, a monstrous beast!",
    "What’s it like?",
    "It’s weird—all sorts of shapes. Now it’s an ox—no, no, a jackass—now it’s a woman—what a gorgeous babe!",
    "Where is she? I’ll go say hello.",
    "She’s not a woman any more. Now she’s a bitch!",
    "It’s Empusa!!",
    "Her whole face is on fire!",
    "Her legs—does she have one made of bronze?",
    "Yes! By Poseidon, yes! The other’s made of cow shit. And that’s no lie.",
    "Where can I run?",
    "(mocking)Where can I run?",
    "O holy man, save me—so we can drink together.",
    "We’re screwed! O lord Hercules!",
    "Don’t call me that! I’m begging you, my man—don’t say that name!",
    "Then Dionysus . . .",
    "That’s worse than Hercules.",
    "Beat it! Shoo! Come on, master.",
    "What’s going on?",
    "Cheer up—we’ve come through everything just fine. Now like Hegelochus we can recite “After the storm I see the seals are calm.” Empousa’s left.",
    "You swear?",
    "Cross my heart.",
    "Swear again.",
    "Yes, by Zeus.",
    "Swear it one more time.",
    "By Zeus, I swear.",
    "looking at her almost made me puke.",
    "That was a close shave— You were so terrified you stained your pants.",
    "Woe, woe, why do such ills afflict me so? Which god shall I accuse of thus destroying me?"

];

let promptDiv = document.getElementById("prompt");
let checkDiv = document.getElementById("check");
let toggleDiv = document.getElementById("exp");
let countDiv = document.getElementById("runCount");


function clickedOnExp(){
    console.log("toggle");

    if (toggleDiv.classList.contains("hidden")){
        toggleDiv.classList.remove("hidden");
    }
    else{
        toggleDiv.classList.add("hidden");
    }

}

function loading(){
    console.log("loaded");
}

function clickedOnDemoBox(){
    console.log("clickCount " + clickCount);
    if(typeof myStringArray[clickCount] != 'undefined'){
        promptDiv.innerText = myStringArray[clickCount];
    }

    if (dualCount == 0){
        if(typeof myStringArray[clickCount] != "undefined"){
            check.innerText = myStringArray[clickCount+1];
        }
        else{
            check.innerText = myStringArray["???"];
        }
        checkDiv.style.backgroundColor = "#bcd536";
    }
    else{
        check.innerText = "???";
        checkDiv.style.backgroundColor = "lightgray";
        // console.log("gray");
    }

    if (dualCount == 1){
        dualCount = 0;
    }
    else{
        dualCount = 1;
        if (clickCount < 43){
            clickCount = clickCount + 2;
        }
        else{
            clickCount = 0;
            runCountVar++;
            runCountFunc();
        }
    }
    increaseProgress();
    
}

const progressBar = document.getElementById('progress');

function increaseProgress() 
{
    if (clickCount < 45) {
        progressBar.style.width = clickCount*2.23 + '%';    
    }
}

function runCountFunc(){
    countDiv.innerText = runCountVar;
    addFrog();
}

function addFrog(){
    console.log("frog generated");
    let frogDiv = document.createElement("div");
    let frogImgDiv = document.getElementById("frogCount");
    let img = new Image();
    img.classList.add("frogImg");
    img.src = 'round-frog.png';


    frogDiv.appendChild(img);
    frogImgDiv.append(frogDiv);
}

// note: maybe make it flexible for any 2 person script? so the user can type it in like in the complex example?
// note: character descriptions