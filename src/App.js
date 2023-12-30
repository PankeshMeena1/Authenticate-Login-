import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from "./registration";
import Laytout from "./Layout";
import Home from "./Home";
import About from "./about";
import Services from "./services";
import Palacement from "./placement";
import Contact from "./contact";

const App=()=>
{
  return(
    <>
      <BrowserRouter>
       <Routes>
         <Route index element={<Login/>}></Route>
           <Route path="/login" element={<Login/>}> </Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/" element={<Laytout/>}>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/placement" element={<Palacement/>}/>
            <Route path="/contact" element={<Contact/>}/>
            </Route> 
          </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;