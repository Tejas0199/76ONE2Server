
const express = require('express');
const {join} = require("path");
const cors = require('cors');
const { connectWithDatabase } = require('./model/db');
const PORT = 4500;
const hostName = "127.0.0.7";

const app = express();
app.use(express.static("./public"));
app.use(express.json())
app.use(cors({
    origin : "http://localhost:3000"
}))



app.listen(PORT,hostName,async () => {
   
    console.log(`Server started with ${hostName}:${PORT}`)
})