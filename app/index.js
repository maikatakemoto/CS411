import express from "express";
import bodyParser from "body-parser";
import { connectToDatabase } from "./db.js";
import { connect } from "http2";


const app = express();
const port = 9000;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file.
  res.render("index.ejs");
});


async function startServer() {
    const db = await connectToDatabase();
    // can use db to interact with our database
    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });
}

startServer();

// Why do we need this??