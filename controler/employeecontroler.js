const EmpModel = require("../module/employeemodel");

const EmpDataInsert =(req, res)=>
{
    const mydata = new EmpModel(req.body)
    mydata.save().then((res)=>(console.log("data insert successful")))

}
const EmpLogin=(req, res)=>
{
       EmpModel.find(req.body).then((data)=>{
           res.send(data)
       });  
}
const Finddata=(req, res)=>{
   const mydata = new EmpModel(req.body);

   EmpModel.find({email:mydata.email}).then((data)=>{res.send(data)})
}

module.exports={
    EmpDataInsert,EmpLogin,Finddata
}