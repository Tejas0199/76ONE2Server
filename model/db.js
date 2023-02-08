const mongoose = require('mongoose');
const DB_URL = "mongodb://localhost:27017/jspiders"

// mongodb 6 mongodb://127.0.0.1:27017/jspiders

async function connectWithDB () {
    try {
        await mongoose.connect(DB_URL);
        console.log("connected with DB");
    } catch (err) {
        console.log("not able to connet with DB")
    }
}

module.exports = {
    connectWithDB
}