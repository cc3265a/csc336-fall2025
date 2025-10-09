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