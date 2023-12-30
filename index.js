const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Employeedata = require("./controler/employeecontroler");
app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Empcomnpany").then(()=>console.log("Conection Succse"))

app.post("/stuinsert", Employeedata.EmpDataInsert);
app.post("/stulogin", Employeedata.EmpLogin);
app.post("/finddata", Employeedata.Finddata)

app.listen(5000, (req, res)=>{
     console.log("Succeffull Server !!!");
});