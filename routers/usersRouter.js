const express = require('express');
const userModel = require('../model/userModel')
const userRouter = express.Router();

userRouter.get('/',(req,res) => {
    userModel.find({},(err,users) => {
        if(err) {
            res.status(500).send({ msg : "something went wrong please try again later"});
        } else {
            res.status(200).send({users});
        }
    })
});

userRouter.post('/',(req,res) => {
    const userData = req.body;
    userModel.create(userData,(err,data) => {
        if(err) {
            res.status(400).send({ msg : "Not able to create account with give cridentials"});
        } else {
            res.status(200).send({ msg : `Successfully create account using ${userData.phone}`});
        }
    })
})

userRouter.put('/',() => {

})

userRouter.patch('/',() => {

})

userRouter.delete('/',() => {

})
module.exports = userRouter