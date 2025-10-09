import * as fs from 'fs'; // or import fs from 'fs';
import express from "express";

let fileContent = fs.readFileSync("./world.json", "utf8");
let myParse = JSON.parse(fileContent);

let regions = [];
let towns = [];
let people = [];

for (let r = 0; r < myParse.regions.length; r++){
    regions.push(myParse.regions[r].name)
    for (let t = 0; t < myParse.regions[r].towns.length; t++){
        towns.push(myParse.regions[r].towns[t].name);
        for (let p = 0; p < myParse.regions[r].towns[t].notable_people.length; p++){
            people.push(myParse.regions[r].towns[t].notable_people[p].name);
        }
    }
}
console.log("regions:");
console.log(regions);
console.log("towns:");
console.log(towns);
console.log("people:");
console.log(people);

