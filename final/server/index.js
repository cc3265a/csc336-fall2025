import express from "express";
import cors from "cors";

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(cors());

app.get("/api/data", (req, res) => {
    console.log("hello from api endpoint /api/data");
    res.json({
        something: 1234567890
    });
});

app.get("/world", async (req, res) => {
    const dataString = await fs.readFileSync("data.json", "utf-8");
    const dataObject = JSON.parse(dataString);
    res.json(dataObject);
});


 
app.listen(3000);