import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 9000;

//Step 3 - Make the styling show up.
//Hint 1: CSS files are static files!
//Hint 2: The header and footer are partials.
//Hint 3: Add the CSS link in header.ejs
app.use(express.static("public"));

//Step 4 - Add a dynamic year to the footer.
//Hint: Google to find out how to get the current year using JS.

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //Step 1 - Make the get route work and render the index.ejs file.
  res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});