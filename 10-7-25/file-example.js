const fs = require("fs");

let programCount = 0;

try{
    let fileContent = fs.readFileSync("program_count.txt", "utf8");
    programCount = JSON.parse(fileContent);
    console.log(fileContent);

}catch(error){
    console.log("error happened! probably no file existing")
}
programCount++;
console.log(programCount);
fs.writeFileSync("program_count.txt", JSON.stringify(programCount));


