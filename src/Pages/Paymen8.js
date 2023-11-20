import React from 'react'
import './Payrs.css';
import img from './Qr8.jpeg'
import { Link } from 'react-router-dom';
function Paymen8 (){

  return (
    <div className="Payment1">
      <br></br>
      <img src={img}  alt=""></img>
      <br></br>
      <br></br>
      <Link to="/Bill"><btn>Printbill</btn></Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Paymen8;
