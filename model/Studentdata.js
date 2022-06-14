const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    first_name:{
        type : String,
        required : true,
    },
    last_name:{
        type : String,
        required : true,
    },
    collegename:{
        type : String,
        required : true,
    },
    roll_no:{
        type : String,
        required : true,
    },
    subject:{
        type : String,
        required : true,
    },
    phone:{
        type : Number,
        required : true,
    },
    email:{
        type : String,
        required : true,
    },
    message:{
        type :String,
        required : true,
    },
});

module.exports = mongoose.model('studentData',studentSchema);