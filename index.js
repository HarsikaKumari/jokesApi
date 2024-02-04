import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import exp from "constants";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const result = response.data;
    console.log(response);
    res.render("index.ejs", {data: result});
  } catch (error) {
    console.log("Failed to make request: ", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  const string = req.body.search_string;
  try {
    console.log(req.body);
    const flags = req.body.flags;
    const categories = req.body.category / categories;
    const language = req.body.language;
    const response = await axios.get(
      `https://v2.jokeapi.dev/joke/${categories}/lang=${language}?blacklistFlags=${flags}`
    );
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    res.render("index.ejs", {
      error: `Oops!! looks like we don't have jokes which contain ${string}`,
    });
  }
});

app.listen(port, (req, res) => {
  console.log(`The server is running on port ${port}`);
});
