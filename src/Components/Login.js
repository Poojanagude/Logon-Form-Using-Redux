import React from 'react'
import {useState} from "react";
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import "./Login.css";
const Login=()=>{
    const [name,setName]=useState("");
    const[email,setemail]=useState("");
    const [password,setpassword] = useState("");
     const [cpassword,setcpassword] = useState("");
    const dispatch=useDispatch();
    const handleSubmit =(e) =>{
        e.preventDefault();
        dispatch(login({
            name:name,
            email:email,
            password:password,
            cpassword:cpassword,
            loggedIn:true,
        })
        );
    };
    return(
      <div className='login'>
        <form className='login_form' onSubmit={(e)=> handleSubmit(e)}>
            <h1>Login</h1>
            <input type="name" placeholder='Name' value={name} onChange={(e) =>setName(e.target.value)}/>
            <input type="email" placeholder='E-mail' value={email} onChange={(e) =>setemail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={(e) =>setpassword(e.target.value)}/>
    <input type="password" placeholder='confirm password' value={cpassword} onChange={(e) =>setcpassword(e.target.value)}/> 
            <button type="submit" className='submit_btn'>Submit</button>
    </form>
   
      </div >
    )
  }
  export default Login;