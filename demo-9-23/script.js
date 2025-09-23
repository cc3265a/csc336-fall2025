class Person{
    constructor(n){
        this.name = n;
    }
    sayHello(times){
        for (let i = 0; i < times; i++){
            console.log("say hello, " + this.name);
        }
    }
}

let Rin = new Person("Rin");
// Rin.sayHello(5);



let add2 = (a,b) =>{
    return a + b;
}

let canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext('2d');

function buttonClicked(e){
    console.log(e);
    
    

    ctx.fillStyle = '#goldenrod';
    let x = Math.random()*600;
    let y = Math.random()*400;
    ctx.fillRect(x, y, 20, 20);
}
let x = 0;
let y = 200

function animationFunction(){
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 600, 400);

    ctx.fillStyle = 'goldenrod';
    ctx.fillRect(x, y, 20, 20);
    if (x < 600){
        x++;
    }
    else{
        y--;
    }
}


setInterval(animationFunction, 10);

let myButton = document.querySelector("#myButton");
myButton.addEventListener("click", buttonClicked);


// myButton.addEventListener("click", (e) => {
//     console.log("button clicked");
//     console.log(this);
// });

let stringOfRin = JSON.stringify(Rin);
// console.log(stringOfRin);
let rinObject = JSON.parse(stringOfRin)
// console.log(rinObject.name)


// console.log(localStorage.getItem("user"));
localStorage.setItem("user", "Rin" + Math.random())


ctx.fillStyle = '#c5ecd8ff';
ctx.fillRect(50, 50, 100, 75);