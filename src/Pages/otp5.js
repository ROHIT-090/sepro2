import React, { useState } from 'react';
import'./Card.css'
import { useNavigate } from 'react-router-dom';
const Otp5 = () => {
    const [onet, setonet] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(onet === ""){
        alert("Please Enter OTP");
        
      }
      else
      {
        navigate("/Bill5");
      }
  };

  return (
    <div className="Mycard">
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div className ="Card"> 
    <form onSubmit={handleSubmit}>
    <h1> Enter OTP</h1>
     <h1>OTP</h1>   
    <input type="text" placeholder=" " value={onet}onChange={(e)=>setonet(e.target.value)}/><br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
    <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
};

export default Otp5;
