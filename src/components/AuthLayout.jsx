import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AuthLayout({children,authentication=true}) {
  const navigate = useNavigate();
  const [loader,setLoader]=useState(true);
  const authStatus=useSelector(state=>state.auth.status)

  
  useEffect(()=>{
    //let authValue=authStatus===true?true:false
    //if(authStatus===true){
    //    navigate("/")
   // }
    //else if(authStatus==false){
     //   navigate("/login")
    //}


     if(authentication && authStatus!==authentication){
         navigate("/login")
     }
     else if(!authentication && authStatus!==authentication){
         navigate("/")
     }
     setLoader(false)
  },[authStatus,navigate,authentication])
  return loader?<h1>Loading...</h1>:<h1>{children}</h1>
}


