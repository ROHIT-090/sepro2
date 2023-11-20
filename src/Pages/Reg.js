import React, { useState } from 'react'
import './Reg.css';
import { Link } from 'react-router-dom';

function Reg() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmrpassword] = useState('');
   
  const handlesubmit = (e)=>{
    e.preventDefault();
    if(email === "" || password === "" || confirmpassword === ""){
      alert("please enter your Mail-id and password");
    }
    else
    {
      
        alert("acccount created successfully Go to Login page");
      }
    }
  return (
    <div className="Reg">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p3>
        <u>CREATE LOGIN</u>
      </p3>
    <div className="NewUse">
      <input type="text" placeholder="email-id" value={email}onChange={(e)=>setemail(e.target.value)}/>
      <br></br>
      <input type="text"placeholder="password" value={password}onChange={(e)=>setpassword(e.target.value)}/>
      <br></br>
      <input type="text"placeholder="confirmpassword"value={confirmpassword}onChange={(e)=>setconfirmrpassword(e.target.value)}/>
      <br></br>
      <br></br>
      <button onClick={handlesubmit}>Register</button>
      <br></br>
      <Link to="/NewLog"><button>Back</button></Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
    </div>
  );
}

export default Reg;
