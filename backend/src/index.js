import express from 'express'
import dotenv from 'dotenv'
import cookie_parser from 'cookie-parser'
import cors from 'cors'
import dbConnection from './db/index.db.js'
dotenv.config({ path: "./env" });

const app = express()

app.use(express.json())
app.use(cookie_parser())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["POST", "GET", "PUT", "DELETE"]
}))

const PORT = process.env.PORT || 4000;

dbConnection()
  .then(
    app.listen(PORT, () => {
      console.log(`Server created and running on port ${PORT}`)
    })
  ).catch((error) => console.log("Got error while creating server ", error));
