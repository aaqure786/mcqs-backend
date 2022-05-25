const mongoose = require('mongoose');
const mogoURI = "mongodb://localhost:27017";


const connectToMongose = ()=> {
    mongoose.connect(mogoURI, ()=>{
        console.log("Connected to mongoose successfuly")
    })
}

module.exports = connectToMongose