import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/data", (req, res) => {
    console.log("hello from api endpoint /api/data");
    res.json({
        something: 1234567890
    });
});

app.listen(3000);