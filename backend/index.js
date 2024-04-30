import express from "express"
import mongoose from "mongoose"
import tripRoutes from './routes/trips.js'
import userRoutes from './routes/user.js'
import 'dotenv/config'

const app = express();
const port = 4000;

// app.use(cors())

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/trip/', tripRoutes)
app.use('/api/user/', userRoutes)

// connect to database
mongoose.connect (
  "mongodb+srv://yuribychkov15:PQYydW85g3s1GJb7@cluster0.n7pakwc.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Cluster0"
).then(() => {
  app.listen(port, () => {
    console.log("Connected to DB & Server is running on", {port})
  })
}).catch((error) => {
  console.log(error)
})

