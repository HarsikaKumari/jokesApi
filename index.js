import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import exp from "constants";

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.render("index.js", {content:"waiting for the data..."})
});

app.listen(port, (req, res) =>{
    console.log(`The server is running on port ${port}`);
});
