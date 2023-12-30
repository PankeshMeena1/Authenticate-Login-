const mongoose = require ("mongoose");

const EmpScheme = new mongoose.Schema({
        "name":String,
        "number":String,
        "email":String,
        "password":String
});

module.exports=mongoose.model("Employee12", EmpScheme);