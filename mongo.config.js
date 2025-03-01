const mongoose = require("mongoose");

const connectToDo = async ()=>{

    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to DB")
    }catch(err){
        console.log("Err in connected the DB")
    }

}

module.exports = connectToDo();