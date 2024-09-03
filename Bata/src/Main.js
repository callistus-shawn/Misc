import React from "react";
import {Route,Routes} from "react-router-dom";
import Men from "./Men";
import Women from "./Women";
import Home from "./Home";
import Web from "./Web";
import Kids from "./Kids";
import Brand from "./Brands";
import New from "./New";
import Sale from "./Sale";
function Approute()
{
return(
   
    <Routes>
     <Route index element={<Home/>}/>
     <Route path="/Web" element={<Web/>}/>
     <Route path="/Women" element={<Women/>}/>
     <Route path="/Men" element={<Men/>}/>
     <Route path="/Kids" element={<Kids/>}/>
     <Route path="/Brands" element={<Brand/>}/>
     <Route path="/New" element={<New/>}/>
     <Route path="/Sale" element={<Sale/>}/>
     

    </Routes>
    
)
}

export  default Approute