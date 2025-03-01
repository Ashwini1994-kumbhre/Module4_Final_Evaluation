const mongoose = require("mongoose");
const { type } = require("os");
const userSchema = new mongoose.Schema(
    {
        name:{type:string},
        email:{type:string ,unique:true}
        mobileNumber:{type:string}
        password:{type:string}
        role:{enum[Admin,Doctor,patient]}
        specialization: Enum {(nerves, heart, lungs, skin), default:Doctor}
        availableDays:{ Enum [Sun, Mon, Tue, Wed, Thu, Fri, Sat],required:Doctor}
    }
);

const userModel = mongoose.model("user",userSchema);

model.exports = userModel;