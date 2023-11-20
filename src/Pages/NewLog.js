import React, { useState } from 'react';
import './NewLog.css';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
const NewLog = () => {
  const [email,  setEmail] = useState('');
  const [password,  setPassword] = useState('');
  const navigate = useNavigate();

  const handlelogin = async (e)=>{
    e.preventDefault();
    
    try{
      await auth.signInWithEmailAndPassword(email,password);
      console.log(email+" "+password);
      navigate("/Home1")  

    }
    catch(error){
      console.log(error);
      alert("UserNotExists");
    }
      
    };
  return (
    <div className="UpHead">
      <br></br>
      <br></br>
      <p>
        <u>SIGNIN/SIGNUP</u>
      </p>
      <form onSubmit={handlelogin}>
      <div className="User">
      <br></br>  
      <h1>Email ID</h1>
      <input type="Email-id" placeholder="" value={email}onChange={(e)=>setEmail(e.target.value)}/>
      <br></br>
      <h1>Password</h1>
      <input type="password"placeholder="" value={password}onChange={(e)=>setPassword(e.target.value)}/>
      <br></br>
      <button>SignIn</button>
      <br></br>
      <Link to="/Newuser"><button>SignUp</button></Link>
    </div>
    </form>
    </div>
       
  );
}

export default NewLog;
