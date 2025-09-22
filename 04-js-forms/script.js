let lines1 = ["test 1", "test 2"];
let lines2 = ["test 1b", "test 2b"];
let lines1Box = document.getElementById("lines1Box");
let lines2Box = document.getElementById("lines2Box");
let count = 0;
let line1Count = 0;
let line2Count = 0;
let nextButton = document.getElementById("#nextLine");
let name1Text = "";
let name2Text = "";
let reviews = [];

let DionLines = [
    "Xanthias! Hey, Xanthias!",
    "Come here!",
    "All right, what have we got?",
    "Did you see the men who beat their fathers— or perjurers—the ones he mentioned?",
    "By Poseidon, yes I do! Now I see them. So what do we do next?",
    "To Hell with him! He was talking big to make me scared. He saw I was a fighter, and he’s jealous. No one’s more full of it than Hercules. But I’m keen now for some adventure, some exploit worthy of this expedition.",
    "What? Where is it?",
    "Get behind me.",
    "You get in front.",
    "What’s it like?",
    "Where is she? I’ll go say hello.",
    "It’s Empusa!!",
    "Her legs—does she have one made of bronze?",
    "Where can I run?",
    "O holy man, save me—so we can drink together.",
    "Don’t call me that! I’m begging you, my man—don’t say that name!",
    "That’s worse than Hercules.",
    "What’s going on?",
    "You swear?",
    "Swear again.",
    "Swear it one more time.",
    "looking at her almost made me puke.",
    "Woe, woe, why do such ills afflict me so? Which god shall I accuse of thus destroying me?"
]
let XanLines = [
    "Over here!",
    "Greetings, master.",
    "Nothing but filthy muck—mud and darkness.",
    "You mean you don’t?",
    "We’d better get away from here. Hercules mentioned to us it’s the place where wild beast prowl.",
    "Of course you are. What’s that? I hear a noise.",
    "Behind us.",
    "No, it’s up ahead.",
    "My god! Now I see it. Ooooh, a monstrous beast!",
    "It’s weird—all sorts of shapes. Now it’s an ox—no, no, a jackass—now it’s a woman—what a gorgeous babe!",
    "She’s not a woman any more. Now she’s a bitch!",
    "Her whole face is on fire!",
    "Yes! By Poseidon, yes! The other’s made of cow shit. And that’s no lie.",
    "(mocking)Where can I run?",
    "We’re screwed! O lord Hercules!",
    "Then Dionysus . . .",
    "Beat it! Shoo! Come on, master.",
    "Cheer up—we’ve come through everything just fine. Now like Hegelochus we can recite “After the storm I see the seals are calm.” Empousa’s left.",
    "Cross my heart.",
    "Yes, by Zeus.",
    "By Zeus, I swear.",
    "That was a close shave— You were so terrified you stained your pants.",
]

function updateScriptDiv(){
    if(line2Count > line1Count){
        line2Count = line1Count;
    }


    if (count >= lines1.length + lines2.length){
        count = 0;
        line1Count = 0;
        line2Count = 0;
    }

    if (count % 2 == 0){
        if(typeof lines1[line1Count] == "undefined"){
            lines1Box.innerText = "???";
            lines2Box.innerText = "???";
        }
        else{
            lines1Box.innerText = lines1[line1Count];
            lines2Box.innerText = "???";
            line1Count++;
        }
    }
    else{
        lines2Box.innerText = lines2[line2Count];
        line2Count++;
    }
    
    count++;
}


document.addEventListener("DOMContentLoaded", updateScriptDiv());
let addDialogueForm = document.querySelector("#addDialogueForm");
addDialogueForm.addEventListener("submit", addNewDialogue);

function addNewDialogue(e){
    e.preventDefault();
    let newLine1 = document.querySelector("#newLine1").value;
    let newLine2 = document.querySelector("#newLine2").value;

    if (newLine1.length < 2){
        showErrorDiv();
        createErrorDiv("Error, line 1 is too short!");
        console.log("Error, line 1 is too short!");
        return;
    }
    if (newLine2.length < 2){
        showErrorDiv();
        createErrorDiv("Error, line 2 is too short!");
        console.log("Error, line 2 is too short!");
        return;
    }
    
    lines1.push(newLine1);
    lines2.push(newLine2);
    // createErrorDiv("&nbsp;");
    hideErrorDiv();
}

let addNamesForm = document.querySelector("#addNamesForm");
addNamesForm.addEventListener("submit", addNewNames);

function addNewNames(e){
    e.preventDefault();
    
    name1Text = document.querySelector("#name1").value;
    name2Text = document.querySelector("#name2").value;

    if (name1Text.length > 0){
        if (name1Text[0] != name1Text[0].toUpperCase()){
            showErrorDiv();
            createErrorDiv("Error, name 1 must be capitalized!");
            console.log("Error, name 1 must be capitalized!");
            return;
        }
    }
    if (name1Text.length > 0){
        if (name2Text[0] != name2Text[0].toUpperCase()){
            showErrorDiv();
            createErrorDiv("Error, name 2 must be capitalized!");
            console.log("Error, name 2 must be capitalized!");
            return;
        }
    }

    let nameBox1 = document.querySelector("#name1Display");
    let nameBox2 = document.querySelector("#name2Display");
    // createErrorDiv("&nbsp;");
    hideErrorDiv();
    nameBox1.innerText = name1Text;
    nameBox2.innerText = name2Text;
    // Treanor, I hope you can forgive me for not storing these names in an array, I hope I have showed in the other forms that I know how to do this.
}

function clearScript(){
    lines1 = [];
    lines2 = [];
    count = 0;
    line1Count = 0;
    line2Count = 0;
    updateScriptDiv();
}

function frogsScript(){
    count = 0;
    line1Count = 0;
    line2Count = 0;
    lines1 = DionLines;
    lines2 = XanLines;
}

let reviewSubmit = document.querySelector("#reviewDiv");
reviewSubmit.addEventListener("submit", submitReview);

function submitReview(e){
    e.preventDefault();
    console.log("review submitted");

    let scoreInput = document.querySelector("#rating").value;
    let colorInput = document.querySelector("#userColor").value;
    let nameInput = document.querySelector("#revName").value;

    if (scoreInput < 5){
        showErrorDivRev();
        createErrorRevDiv("score too low! You cant hate it that much ;)")
        console.log("score too low! You cant hate it that much ;)")
        return;
    }

    let newReview = {
        name: nameInput,
        score: scoreInput,
        color: colorInput
    }
    reviews.push(newReview);
    displayReviews();
    console.log(reviews);
    // createErrorRevDiv("&nbsp;");
    hideErrorDivRev();
}

function displayReviews(){
    let reviewDiv = document.querySelector("#reviewList");

    reviewDiv.innerHTML = "";

    for (let rev of reviews){
        let revHTML = createReviewDiv(rev);
        reviewDiv.innerHTML += revHTML;
    }
}
function createReviewDiv(rev){
    return `
        <div class="reviewBox">
            <h1>${rev.name}</h1>
            <div class="rev">Score: ${rev.score}</div>
            <div class="colorBox" style="background-color: ${rev.color}; color: ${rev.color};"><p>---</p></div>
        </div>
        
    `;
}
function createErrorDiv(msg){
    let errorHTML =  `
        <div class="errorDiv">
            <p>${msg}</p>
        </div>
        
    `;
    let errorLoc = document.querySelector("#errorLoc");
    errorLoc.innerHTML = errorHTML;
}
function createErrorRevDiv(msg){
    let errorHTML =  `
        <div class="errorDiv">
            <p>${msg}</p>
        </div>
        
    `;
    let errorLoc = document.querySelector("#errorLocRev");
    errorLoc.innerHTML = errorHTML;
}
function hideErrorDiv(){
    let errorLoc = document.querySelector("#errorLoc");
    errorLoc.classList.add("hidden");
}
function showErrorDiv(){
    let errorLoc = document.querySelector("#errorLoc");
    errorLoc.classList.remove("hidden");
}
function hideErrorDivRev(){
    let errorLoc = document.querySelector("#errorLocRev");
    errorLoc.classList.add("hidden");
}
function showErrorDivRev(){
    let errorLoc = document.querySelector("#errorLocRev");
    errorLoc.classList.remove("hidden");
}

// explaination for how to use dialogue maker