import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { myusecontaxt } from "./UserContext";
import { useNavigate } from "react-router-dom";
const Login=()=> {

  const mynevigate = useNavigate();
  const {setvaliduser}=useContext(myusecontaxt);
  const[Email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const Savehandle=()=>
  {

     axios.post("http://localhost:5000/stulogin", {email:Email})
     .then((res)=>{
        if(res.data.length===0)
        {
            setErrorMessages({ name: "email", message: errors.email});
            setEmail("");
        }
        else
                   {
                      if(res.data[0].password === password)
                      {
                          setvaliduser(res.data[0].name);
                          setIsSubmitted(true);
                          setTimeout(()=>{
                            mynevigate("/Home");
                          }, 3000)
                         
                      
                      }
                      else

                      {
                        setErrorMessages({ name: "password", message: errors.password });
                      }

                     
                    }
                    

     })
     setPassword("");
  }

  const errors = {
    email: "invalid Email id please crecte email id",
    password: "invalid password please crecte password"
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" required 
          value={Email} onChange={(e)=>setEmail(e.target.value)} />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="text" name="password"
           required  value={password} onChange={(e)=>setPassword(e.target.value)}/>
          {renderErrorMessage("password")}
        </div>
        <div className="input-container">
           <Link to={"/registration"}>New User Registratioin</Link>
        </div>
        <div className="button-container">
          <input type="submit" onClick={Savehandle}/>
        </div>
    </div>
  );

  return (
    <>
    <div className="app">
      <div className="login-form">
        <div className="title">Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    <div id="pwderr">

    </div>
    </>
  );
}

export default Login;