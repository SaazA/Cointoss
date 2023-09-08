import React from "react";
import Home from '../SCREENS/Home'
import { Route,Routes } from "react-router-dom";

function Routes(){
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="*" element={<Home/>}/>

</Routes>

}
export default Allroutes