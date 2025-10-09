const fs = require("fs"); //import module using "CommonJS"

// console.log("hello node");

let ranNum = [];

//read ranNum.txt
let fileContent = fs.readFileSync("./ranNum.txt", "utf8");


for (let i = 0; i < 20; i++){
    let rand = Math.random();
    ranNum[i] = rand;
    // console.log(ranNum[i]);
}

fs.writeFileSync("ranNum.txt", JSON.stringify(ranNum));


// console.log(fileContent);

ranNum = JSON.parse(fileContent);
console.log(ranNum[0]);
