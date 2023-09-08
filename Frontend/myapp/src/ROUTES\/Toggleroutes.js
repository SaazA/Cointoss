import React from "react";
import Login from "../SCREENS/Login";
import { Route,Routes } from "react-router-dom";
function toggleroutes(){

    var [auth,setAuth]=useState(false)



    return(


        <>
        {localStorage.getItem('auth')=='saaz@abc.com'?
       <>
       <Navbar/>
       <Allroutes/>
       </>     
       :<AuthRoutes/>
        
        
        
    }
        </>
    )





}
export default toggleroutes