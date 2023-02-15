const express = require('express');
const userModel = require('../model/userModel')
const userRouter = express.Router();

userRouter.get('/', async (req,res) => {
    setTimeout(() => {
        userModel.find({},(err,users) => {
            if(err) {
                res.status(500).send({ msg : "something went wrong please try again later"});
            } else {
                res.status(200).send({users});
            }
        })
    },8000)
});

userRouter.post('/',async (req,res) => {
    const userData = req.body;
    userModel.create(userData, (err,data) => {
        if(err) {
            res.status(400).send({ msg : "Not able to create account with give cridentials"});
        } else {
            res.status(200).send({ msg : `Successfully create account using ${userData.phone}`});
        }
    })
})

userRouter.put('/',() => {

})

userRouter.patch('/', async (req,res) => {
    let userData = req.body;
    let id = userData._id;
    delete userData._id;
    userModel.findByIdAndUpdate({ _id : id },{...userData},(err,data) => {
        if(err) {
            res.status(500).send({ msg : "something went worng please try again later"})
        } else {
            res.status(200).send({ msg : `${data.fname + data.lname} data as been updated successfully`});
        }
    })
})

userRouter.delete('/',() => {

})
module.exports = userRouter