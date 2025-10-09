import * as fs from 'fs'; // or import fs from 'fs';
import express from "express";

const app = express();

const PORT = 3000;

let count = 0;

app.listen(PORT, (req, res) => {
    console.log("server started");
});

app.get("/test", (req, res) => {
    console.log("someone made a get request with the 'test' endpoint");
    res.send("hi there, this is server speaking");
});


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

// ranNum = JSON.parse(fileContent);
console.log(ranNum[0]);
