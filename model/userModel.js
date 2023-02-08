const {Schema,model} = require('mongoose');


const userSchema = new Schema({
    fname : String,
    lname : String,
    phone : Number,
    fathername : String,
    dob : String,
    course : String,
    subject : String,
    aadhar : Number,
    gender : String,
    permaddress : String,
    curraddress : String
})

module.exports = model('users',userSchema);
