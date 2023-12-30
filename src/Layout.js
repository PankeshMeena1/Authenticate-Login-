import{Link, Outlet} from "react-router-dom";
import { useContext } from "react";
import { myusecontaxt } from "./UserContext";
const Laytout=()=>
{
    const {validuser,setvaliduser}=useContext(myusecontaxt);

    const logout=()=>{
        setvaliduser("");
    }
    return(
        <>
         <div id="logout">
            <ul>
                <li><Link to="/"> Welcome User - {validuser}----<span onClick={logout}>Logout</span></Link></li>
            </ul>
         </div>
           <div id="layt">
             <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/placement">Palacement</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
             </ul>

           </div>
              <div id="out">
                  {<Outlet/>}
              </div>
        </>
    );
}

export default Laytout;