const { connectWithDB } = require('./model/db')
const userModel = require('./model/userModel');
const express = require('express');
const {join} = require("path");
const cors = require('cors');
// const { connectWithDatabase } = require('./model/db');
const PORT = 4500;
const hostName = "127.0.0.7";

const app = express();
app.use(express.static("./public"));
app.use(express.json())
app.use(cors({
    origin : "http://localhost:3000"
}))

app.post('/users',(req,res) => {
    const userData = req.body;
    console.log(userData);
    userModel.create(userData,(err,data) => {
        if(err) {
            res.status(400).send({ msg : "not able to insert data" });
        } else {
           res.status(200).send({ msg : "successfully inserted data into DB" , data : data })
        }
    })
})

app.listen(PORT,hostName,async () => {
    await connectWithDB()
    console.log(`Server started with ${hostName}:${PORT}`)
})