import axios from "axios";
import { useState} from "react";
import { Link} from "react-router-dom";


const Registration =()=>
{
    const [input, setinput]=useState({});
    const [errorMessages, setErrorMessages] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

    const handledata=(e)=>{
       let value = e.target.value;
       let name = e.target.name;

       setinput((values)=>({...values, [name]:value}));
    }

    const Savehandle=()=>
    {
        axios.post("http://localhost:5000/finddata", input).then((res)=>{

          if(res.data.length===1)
          {
            setErrorMessages(" User already Registered ")
            setIsSubmitted(true)
          }
          else
          {
            axios.post("http://localhost:5000/stuinsert", input).then(()=>{alert("Succsefully Register")})
            setIsSubmitted(true)
          }

        });

    }

    const renderForm=(
      <div className="form1">
        <div className="input-container">
          <label>Name</label>
        <input  type="text" name="name" required
        value={input.name} onChange={handledata}/>
         </div>
         <div className="input-container">
          <label>Number</label>
         <input  type="text" name="number" required
         value={input.number}  onChange={handledata}/>
         </div>
         <div className="input-container">
          <label>Email</label>
          <input  type="text" name="email" required
          value={input.email}  onChange={handledata}/>
         </div>
         <div className="input-container">
          <label>Password</label>
        <input  type="text" name="password" required
        value={input.password}  onChange={handledata}/>
         </div>
         <div className="button-container"> 
         <input type="Submit" onClick={Savehandle} />
         </div>
      </div>
      )
  
    
    return(
    <>
    <center> 
      <div className="app">
      <div className="login-form">
        <div className="title">Registration Form</div>
        <div style={{color:"red"}}>{errorMessages}</div>
        {isSubmitted ? <div> User is successfully Registered 😎 <Link to="/login">Login Now</Link></div>: renderForm}
      </div>
    </div>
      </center>
    </>
    );
}
export default Registration;