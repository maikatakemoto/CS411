import express from "express"
import mongoose from "mongoose"
import cors from "cors"
// import { connectToDatabase } from "./db.js";
import UserModel from "./models/Users.js"

const app = express();
app.use(cors())
app.use(express.json());
const port = 3000;

mongoose.connect (
  "mongodb+srv://yuribychkov15:PQYydW85g3s1GJb7@cluster0.n7pakwc.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Cluster0"
)

// get Users and their information -> use GET request in Thunderclient to see results
app.get("/getUsers", (req, res) => {
  UserModel.find({}).then(function(users) {
    res.json(users)
  }).catch(function(err) {
    res.json(err)
  })
})

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user)
  await newUser.save();
  res.json(user);
})


app.listen(port, ()=> {
  console.log("Server is running")
})

// app.use(express.static("public"));

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   //Step 1 - Make the get route work and render the index.ejs file.
//   res.render("index.ejs");
// });


// async function startServer() {
//     const db = await connectToDatabase();
//     // can use db to interact with our database
//     app.listen(port, () => {
//         console.log(`Server running on port ${port}.`);
//     });
// }

// startServer();

// Why do we need this??