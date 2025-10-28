console.log("hello world");

import express from "express";
import fs from "fs";

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/api/randomNumber", (req, res) => {
    res.send(Math.random());
})

app.post("/api/add", (req, res) => {
    console.log(req.body);

    req.body.name += "!!!!";


    console.log(req.body);

    res.json(req.json);
})


app.listen(3000);