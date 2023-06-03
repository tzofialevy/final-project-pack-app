import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

import "./JustPackMe.scss";

const  JustPackMe= () => {
  const _navigate=useNavigate();
  useEffect(()=>{

  },[])
  return (
      <div id='justPackMe div'>
          {/* <h1>HOME PAGE</h1> */}
          
          <h1>Hey friend</h1>
          <h3>Do you have a journey and you do not</h3>
           <h3>know where to start organizing?
          </h3>
          <h3> You have come to the right place</h3>
          <h1>JUST PACK ME</h1>
          <h2>The perfect app for the traveler</h2>
          <h3>We'll start with steps, we'll plan together,</h3>
          <h3> we'll make you a list ready!</h3>
          <h3>And now just- start packing !!!!!</h3>
          <div id="register" onClick={()=>{_navigate("/register")}}>Not registered yet? <span className='textLogin'>register now</span></div>
          <div id="login" onClick={()=>{_navigate("/login")}}>Do you already have an account? <span className='textLogin'>Log in</span> </div>
      </div>
  );
  };

export default  JustPackMe;

