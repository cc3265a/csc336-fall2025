import express from "express";
import fs from "fs";

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.get("/world", (req, res) => {
    let world;
    try {
        let result = fs.readFileSync("./world.json", "utf-8");
        world = JSON.parse(result);

        console.log(world.regions[0].name);

    } catch (error){
        console.log("error!!!!!!");
    }

    console.log(world.regions[0].name);
    res.json(world);

});

app.listen(3000);